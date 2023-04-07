import weaponCap from '../json/weapon-cap.json' assert {type: "json"};
import weaponRec from '../json/weapon-rec.json' assert {type: "json"};
import staffMater from '../json/staff-mater.json' assert {type: "json"};
import farmRec from '../json/farm-rec.json' assert {type: "json"};
import equiMater from '../json/equi-mater.json' assert {type: "json"};
import decorRec from '../json/decor-rec.json' assert {type: "json"};
Vue.component('weapon-cap', {
    data() {
        return {
            weaponCap: weaponCap,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in weaponCap" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in weaponCap">
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
            weaponRec: weaponRec,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in weaponRec" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in weaponRec">
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
            staffMater: staffMater,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in staffMater" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in staffMater">
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
            farmRec: farmRec,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in farmRec" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in farmRec">
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
            equiMater: equiMater,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-segment">
            <table class="ts-table">
                <thead>
                    <tr>
                        <th style="width:auto;">名稱</th>
                        <th style="width:auto;">取得</th>
                        <th style="width:auto;">難度</th>
                        <th style="width:auto;">屬性</th>
                        <th style="width:auto;">攻擊</th>
                        <th style="width:auto;">防禦</th>
                        <th style="width:auto;">魔攻</th>
                        <th style="width:auto;">魔防</th>
                        <th style="width:auto;">力量</th>
                        <th style="width:auto;">體力</th>
                        <th style="width:auto;">智力</th>
                        <th style="width:auto;">特殊能力</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in equiMater" :key="index">
                        <td>{{ item.name }}</td>
                        <td>
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
            decorRec: decorRec,
        }
    },
    template: ` 
    <div class="ts-content">
        <div class="ts-tab is-pilled" style="justify-content: center;">
            <button class="item is-accent" v-for="(lists, i) in decorRec" :data-tab="lists.tab" :class="[lists.active?'is-active':'']">
                {{ lists.category }}
            </button>
        </div>
        <div class="ts-space"></div>
        <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in decorRec">
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