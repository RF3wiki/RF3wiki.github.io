Vue.component('home', {
    template: `
    <div class="ts-center">
        <div class="ts-header is-large is-heavy is-icon">
            <div class="ts-icon is-cube-icon"></div>
            使用規範
        </div>
        <div class="ts-content is-padded is-center-aligned">
            <div class="ts-text">本網站所有資源皆來自於網路蒐集</div>
            <div class="ts-text" style="word-break: keep-all;">由於內容大多為舊NDS版，部分翻譯是舊民間漢化</div>
            <div class="ts-text">未來將會陸續更新</div>
            <div class="ts-divider is-section"></div>
            <div class="ts-text">未經許可不得擅自複製、二次發佈</div>
            <div class="ts-text">本網站是由對符文系列的愛推動而成</div>
            <div class="ts-text">不可用於商業用途</div>
            <div class="ts-divider is-section"></div>
            <div class="ts-text">使用 shift + 滾輪 可以橫向滾動表格</div>
            <div class="ts-divider is-section"></div>
            <div class="ts-space is-large"></div>
            <a href="https://asia.sega.com/rf3sp/cht/" target="_blank">
            <span> 符文工廠3 豪華版 官方網站 </span>
            </a>
            <div class="ts-space"></div>
        </div>
    </div>
    `
});

Vue.component('error-page', {
    template: `
    <div class="ts-center">
        <div class="ts-header is-large is-heavy is-icon">
            施工中
        </div>
    </div>
    `
});

Vue.component('weapon-cap', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/weapon-cap.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>屬性</th>
                        <th>攻擊</th>
                        <th>特殊能力</th>
                        <th>特殊效果</th>
                        <th>買價</th>
                        <th>賣價</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.attr }}</td>
                        <td>{{ item.atk }}</td>
                        <td>{{ item.sp }}</td>
                        <td>{{ item.se }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.sell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('weapon-rec', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/weapon-rec.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>等級</th>
                        <th>材料1</th>
                        <th>材料2</th>
                        <th>材料3</th>
                        <th>材料4</th>
                        <th>材料5</th>
                        <th>材料6</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.skillLv }}</td>
                        <td>{{ item.item1 }}</td>
                        <td>{{ item.item2 }}</td>
                        <td>{{ item.item3 }}</td>
                        <td>{{ item.item4 }}</td>
                        <td>{{ item.item5 }}</td>
                        <td>{{ item.item6 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('staff-mater', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/staff-mater.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>Lv1屬性</th>
                        <th>Lv1</th>
                        <th>Lv2屬性</th>
                        <th>Lv2</th>
                        <th>Lv3屬性</th>
                        <th>Lv3</th>
                        <th>速度</th>
                        <th>參考</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td v-for="(data , index) in item.data" :kry="index">
                        {{data}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('farm-rec', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/farm-rec.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>等級</th>
                        <th>材料1</th>
                        <th>材料2</th>
                        <th>材料3</th>
                        <th>材料4</th>
                        <th>材料5</th>
                        <th>材料6</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in lists.list" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.skillLv }}</td>
                    <td>{{ item.item1 }}</td>
                    <td>{{ item.item2 }}</td>
                    <td>{{ item.item3 }}</td>
                    <td>{{ item.item4 }}</td>
                    <td>{{ item.item5 }}</td>
                    <td>{{ item.item6 }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('equi-mater', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/equi-mater.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>取得</th>
                        <th>難度</th>
                        <th>屬性</th>
                        <th>攻擊</th>
                        <th>防禦</th>
                        <th>魔攻</th>
                        <th>魔防</th>
                        <th>力量</th>
                        <th>體力</th>
                        <th>智力</th>
                        <th>特殊能力</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="spantag in item.get">
                                {{spantag}}
                            </div>
                        </td>
                        <td>{{ item.difficulty }}</td>
                        <td>{{ item.attr }}</td>
                        <td>{{ item.atk }}</td>
                        <td>{{ item.def }}</td>
                        <td>{{ item.matk }}</td>
                        <td>{{ item.mdef }}</td>
                        <td>{{ item.str }}</td>
                        <td>{{ item.vit }}</td>
                        <td>{{ item.int }}</td>
                        <td>{{ item.sp }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('decor-rec', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/decor-rec.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>等級</th>
                        <th>材料1</th>
                        <th>材料2</th>
                        <th>材料3</th>
                        <th>材料4</th>
                        <th>材料5</th>
                        <th>材料6</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.skillLv }}</td>
                        <td>{{ item.item1 }}</td>
                        <td>{{ item.item2 }}</td>
                        <td>{{ item.item3 }}</td>
                        <td>{{ item.item4 }}</td>
                        <td>{{ item.item5 }}</td>
                        <td>{{ item.item6 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('acce-cap', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/acce-cap.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table" style=" white-space: initial;">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>屬性</th>
                        <th>特殊能力</th>
                        <th>特殊效果</th>
                        <th>買價</th>
                        <th>賣價</th>
                        <th>資訊</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.attr }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                {{ sp }}
                            </div>
                        </td>
                        <td>{{ item.se }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.sell }}</td>
                        <td>{{ item.notion }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('shoe-cap', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/shoe-cap.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table" style=" white-space: initial;">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>防禦</th>
                        <th>魔防</th>
                        <th>特殊能力</th>
                        <th>特殊效果</th>
                        <th>買價</th>
                        <th>賣價</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.def }}</td>
                        <td>{{ item.mdef }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                {{ sp }}
                            </div>
                        </td>
                        <td>{{ item.se }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.sell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('het-cap', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/het-cap.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table" style=" white-space: initial;">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>防禦</th>
                        <th>魔防</th>
                        <th>特殊能力</th>
                        <th>特殊效果</th>
                        <th>買價</th>
                        <th>賣價</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.def }}</td>
                        <td>{{ item.mdef }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                {{ sp }}
                            </div>
                        </td>
                        <td>{{ item.se }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.sell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('shield-cap', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/shield-cap.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table" style=" white-space: initial;">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>防禦</th>
                        <th>屬性</th>
                        <th>特殊能力</th>
                        <th>特殊效果</th>
                        <th>買價</th>
                        <th>賣價</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.def }}</td>
                        <td>{{ item.attr }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                {{ sp }}
                            </div>
                        </td>
                        <td>{{ item.se }}</td>
                        <td>{{ item.buy }}</td>
                        <td>{{ item.sell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('crop-info', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/crop-info.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>種子買價</th>
                        <th>種子賣價</th>
                        <th>成長天數</th>
                        <th>連作</th>
                        <th>作物買價</th>
                        <th>作物賣價</th>
                        <th>Lv10賣價</th>
                        <th>特殊能力</th>
                        <th>時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.seedBuy }}</td>
                        <td>{{ item.seedSell }}</td>
                        <td>{{ item.matureDay }}</td>
                        <td>{{ item.crop }}</td>
                        <td>{{ item.cropBuy }}</td>
                        <td>{{ item.cropSell }}</td>
                        <td>{{ item.Lv10Sell }}</td>
                        <td class="ts-wrap" style="width:13rem;">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                {{sp}}
                            </div>
                        </td>
                        <td>{{ item.time }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('cooking-rec', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/cooking-rec.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th style="max-width:10rem;">名稱</th>
                        <th>等級</th>
                        <th style="max-width:15rem;">材料</th>
                        <th>特殊能力</th>
                        <th>時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.skillLv }}</td>
                        <td>
                            <div class="ts-wrap" style="max-width:15rem;">
                                <div class="ts-chip is-spaced is-outlined" v-for="it in item.item">
                                    {{it}}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-wrap" style="max-width: 20rem;">
                                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                                    {{sp}}
                                </div>
                            </div>
                        </td>
                        <td>{{ item.time }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('drug-rec', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/drug-rec.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table" style=" white-space: initial;">
                <thead>
                    <tr>
                        <th style="width:10rem;">名稱</th>
                        <th style="width: 5rem;">等級</th>
                        <th>材料1</th>
                        <th>材料2</th>
                        <th>材料3</th>
                        <th>材料4</th>
                        <th>材料5</th>
                        <th>材料6</th>
                        <th>效果</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.skillLv }}</td>
                        <td>{{ item.item1 }}</td>
                        <td>{{ item.item2 }}</td>
                        <td>{{ item.item3 }}</td>
                        <td>{{ item.item4 }}</td>
                        <td>{{ item.item5 }}</td>
                        <td>{{ item.item6 }}</td>
                        <td class="ts-wrap">
                            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                            {{ sp }}
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('fish-town', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/fish-town.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table"> 
                <thead>
                    <tr>
                        <th style="width:25%;">春天</th>
                        <th style="width:25%;">夏天</th>
                        <th style="width:25%;">秋天</th>
                        <th style="width:25%;">冬天</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="ts-list is-unordered">
                                <div class="item" v-for="item in lists.data.spring">{{item}}</div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-list is-unordered">
                                <div class="item" v-for="item in lists.data.summer">{{item}}</div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-list is-unordered">
                                <div class="item" v-for="item in lists.data.autumn">{{item}}</div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-list is-unordered">
                                <div class="item" v-for="item in lists.data.east">{{item}}</div>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('fish-maze', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/fish-maze.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th style="max-width:10rem;">名稱</th>
                        <th style="max-width:15rem;">可釣的魚</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.list" :key="index">
                        <td>{{ item.name }}</td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="it in item.data">
                                    {{it}}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('maze-data', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/maze-data.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th>名字</th>
                        <th>抗性</th>
                        <th>喜好</th>
                        <th>採集</th>
                        <th>掉落</th>
                        <th>地區</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lists.data" :key="index">
                        <td>{{ item.name }}</td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="de in item.defattr">
                                    {{de}}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="lo in item.lover">
                                    {{lo}}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="dr in item.dropitem">
                                    {{dr}}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="ge in item.getitem">
                                    {{ge}}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="ts-wrap">
                                <div class="ts-chip is-spaced is-outlined" v-for="ar in item.area">
                                    {{ar}}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('hanayome', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/hanayome.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment" style="padding:0;">
        <div class="ts-box is-horizontal" v-for="(item , index) in dataList">
            <div class="ts-image is-covered">
            <img :src="item.img">
            </div>
            <div class="ts-content">
            <div class="ts-header">
                <div class="ts-text">{{item.name}} </div>
            </div>
            <div class="ts-text is-secondary">CV.{{item.cv}} </div>
            <div class="ts-text" style="word-break: keep-all;" v-html="item.summary"></div>
            <div class="ts-text"> 生日 {{item.Birthday}} </div>
            <div class="ts-text"> 居住地 {{item.residence}} </div>
            <div class="ts-text"> 最愛
                <div class="ts-chip is-outlined" v-for="it in item.favorite">
                {{it}}
                </div>
            </div>
            <div class="ts-text"> 喜歡
                <div class="ts-chip is-outlined" v-for="it in item.like">
                {{it}}
                </div>
            </div>
            <div class="ts-text"> 香水
                <div class="ts-chip is-outlined" v-for="it in item.perfume">
                {{it}}
                </div>
            </div>
            <div class="ts-text"> 討厭
                <div class="ts-chip is-outlined" v-for="it in item.Hate">
                {{it}}
                </div>
            </div>
            <div class="ts-text"> 便當
                <div class="ts-chip is-outlined" v-for="it in item.bento">
                {{it}}
                </div>
            </div>
            <div class="ts-text" v-show="item.tag=='Shara'">※樸素的花包括托伊藥草、月落草/月淚草、粉色貓咪、藍色妖姬4種，高級的花包括除上述4種花以外13種
            </div>
            </div>
        </div>
        </div>
    </div>
    `
});

Vue.component('villagers', {
    data() {
        return {
            dataList: null,
        }
    },
    created() {
        if (!this.dataList) {
            fetch('../json/villagers.json')
                .then((res) => res.json())
                .then((data) => {
                    this.dataList = data;
                })
                .catch((error) => { console.warn(error) })
        }
    },
    template: ` 
<div class="ts-content">
    <div class="ts-header">
        ※ 部分物品名稱取自英文wiki，並且機翻，可能需要自行通靈。
    </div>
    <div class="ts-segment" style="padding:0;">
        <div class="ts-box is-horizontal" v-for="(item , index) in dataList">
            <div class="ts-image is-covered">
                <img :src="item.img" style="width:10rem;">
            </div>
            <div class="ts-content">
                <div class="ts-header">
                    <div class="ts-text">{{item.name}} </div>
                </div>
                <div class="ts-text">
                    <div class="ts-row">
                        <div class="column">
                            最愛
                        </div>
                        <div class="column is-fluid">
                            <div class="ts-chip is-outlined" v-for="it in item.favorite">
                                {{it}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ts-text">
                    <div class="ts-row">
                        <div class="column">
                            喜歡
                        </div>
                        <div class="column is-fluid">
                            <div class="ts-chip is-outlined" v-for="it in item.like">
                                {{it}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ts-text">
                    <div class="ts-row">
                        <div class="column">
                            討厭
                        </div>
                        <div class="column is-fluid">
                            <div class="ts-chip is-outlined" v-for="it in item.Hate">
                                {{it}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
});
