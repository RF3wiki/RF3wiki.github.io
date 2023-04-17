const RF3Wiki = new Vue({
    el: '#app',
    data: {
        loadnone: "",
        nowPage: "home",
        menu_list: null,
        mobileMenuOpen: false,
        isNewPage: false,
        newPageKey: 'newPage',
        pageData: {}
    },
    created() {
        if (!this.menu_list) {
            fetch('../json/menulist.json').then((res) => res.json()).then((data) => { this.menu_list = data; }).catch((error) => { console.warn(error) });
        }
    },
    mounted() {
        if (window.location.href.includes('?')) {
            let targter = window.location.href.split('?')[1].split('&');
            this.pageData = { nowPage: targter[0], isNewPage: targter[1] };
            this.changePage(this.pageData.nowPage);
        }
        this.loadnone = 'u-hidden';
    },
    methods: {
        changePage(type, mobile) {
            if (!this.isNewPage) {
                if (type == 'home') {
                    document.querySelectorAll('.ts-menu.ts-tab .item').forEach(el => {
                        el.classList = 'item is-accent';
                    });
                    document.querySelectorAll('.ts-accordion').forEach(el => {
                        el.removeAttribute('open');
                    });
                }
                mobile ? this.removeMobileMenu() : '';
                Vue.component(type) ? this.nowPage = type : this.nowPage = 'error-page';
                this.isNewPage = this.pageData.isNewPage;
            } else {
                window.open(`./newPage.html?${type}&${this.isNewPage}`, '_blank');
            }
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
                        };
                    });
                });
            });
        }
    }
})