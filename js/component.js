import weaponCap from '../json/weapon-cap.json' assert {type: "json"};
import weaponRec from '../json/weapon-rec.json' assert {type: "json"};
import staffMater from '../json/staff-mater.json' assert {type: "json"};
import farmRec from '../json/farm-rec.json' assert {type: "json"};
import equiMater from '../json/equi-mater.json' assert {type: "json"};
import decorRec from '../json/decor-rec.json' assert {type: "json"};
import acceCap from '../json/acce-cap.json' assert {type: "json"};
import shoeCap from '../json/shoe-cap.json' assert {type: "json"};
import hetCap from '../json/het-cap.json' assert {type: "json"};
import shieldCap from '../json/shield-cap.json' assert {type: "json"};
import cropInfo from '../json/crop-info.json' assert {type: "json"};
import cookingRec from '../json/cooking-rec.json' assert {type: "json"};
import drugRec from '../json/drug-rec.json' assert {type: "json"};
import fishTown from '../json/fish-town.json' assert {type: "json"};
import fishMaze from '../json/fish-maze.json' assert {type: "json"};
import mazeData from '../json/maze-data.json' assert {type: "json"};
import hanayome from '../json/hanayome.json' assert {type: "json"};
import villagers from '../json/villagers.json' assert {type: "json"};

Vue.component('weapon-cap', {
    data() {
        return {
            dataList: weaponCap,
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
            dataList: weaponRec,
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
            dataList: staffMater,
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
            dataList: farmRec,
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
            dataList: equiMater,
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
                        <td>
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
            dataList: decorRec,
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
            dataList: acceCap,
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
            dataList: shoeCap,
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
            dataList: hetCap,
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
            dataList: shieldCap,
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
            dataList: cropInfo,
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
            dataList: cookingRec,
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
            dataList: drugRec,
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
            dataList: fishTown,
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
            dataList: fishMaze,
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
            dataList: mazeData,
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
            dataList: hanayome,
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
            dataList: villagers,
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

