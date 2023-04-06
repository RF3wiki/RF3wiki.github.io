import weaponCap from '../json/weapon-cap.json' assert {type: "json"};
Vue.component('weapon-cap', {
    data() {
        return {
            weaponCap: weaponCap,
        }
    },
    template: ` 
<div class="ts-content">
    <div class="ts-tab is-pilled" style="justify-content: space-between;">
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
            ` });