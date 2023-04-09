const RF3Wiki = new Vue({
    el: '#app',
    data: {
        loadnone: "",
        nowPage: "home",
        menu_list: null,
    },
    created() {
        if (!this.menu_list) {
            fetch('../json/menulist.json')
                .then((res) => res.json())
                .then((data) => {
                    this.menu_list = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    mounted() {
        setTimeout(() => {
            this.loadnone = 'u-hidden';
        }, 500);
    },
    methods: {
        changePage(type) {
            if (type == 'home') {
                document.querySelectorAll('.ts-menu.ts-tab .item').forEach(el => {
                    el.classList = 'item is-accent'
                });
                document.querySelectorAll('.ts-accordion').forEach(el => {
                    el.removeAttribute('open')
                });
            }
            Vue.component(type) ? this.nowPage = type : this.nowPage = 'error-page';
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