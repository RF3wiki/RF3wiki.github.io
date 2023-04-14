const RF3Wiki = new Vue({
    el: '#app',
    data: {
        loadnone: "",
        nowPage: "home",
        menu_list: null,
        mobileMenuOpen: false
    },
    created() {
        if (!this.menu_list) {
            fetch('../json/menulist.json').then((res) => res.json()).then((data) => { this.menu_list = data; }).catch((error) => { console.warn(error) });
        }
    },
    mounted() {
        this.loadnone = 'u-hidden';
    },
    methods: {
        changePage(type, mobile) {
            if (type == 'home') {
                document.querySelectorAll('.ts-menu.ts-tab .item').forEach(el => {
                    el.classList = 'item is-accent'
                });
                document.querySelectorAll('.ts-accordion').forEach(el => {
                    el.removeAttribute('open')
                });
            }

            mobile ? this.removeMobileMenu() : '';
            Vue.component(type) ? this.nowPage = type : this.nowPage = 'error-page';
        },
        removeMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
            document.querySelector('.mobile-menu-box').classList.remove("mobile-menu-active");
            document.querySelector('.mobile-menu-btn').classList.remove("mobile-menu-active");
        },
        detailsClose() {
            const details = document.querySelectorAll("details");
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                        }
                    });
                });
            });
        }
    }
})