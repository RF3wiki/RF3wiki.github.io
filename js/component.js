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
      <div class="ts-text is-external-link is-undecorated"> 符文工廠3 豪華版 官方網站 </div>
    </a>
    <div class="ts-space"></div>
    <div class="ts-divider is-section"></div>
    <a href="https://lunahtools.github.io/" target="_blank">
      <div class="ts-text is-external-link is-undecorated is-secondary">@LunAh Eric 製作</div>
    </a>
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
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/weapon-cap.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">屬性：{{ item.attr }}</div>
          <div class="ts-text">攻擊：{{ item.atk }}</div>
          <div class="ts-text" v-show="lists.tab=='staff'">魔攻：{{ item.matk }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text">特殊效果：{{ item.se }}</div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('weapon-rec', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/weapon-rec.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-3-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">等級：{{ item.skillLv }}</div>
          <div class="ts-grid g-0">
            <div class="column">
              <div class="ts-text">材料：</div>
            </div>
            <div class="column">
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.item">
                  {{ sp }}
                </div>
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
Vue.component('staff-mater', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/staff-mater.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-header is-icon">名稱：{{ item.name }}</div>
          <div class="ts-space"></div>
          <div class="ts-grid is-middle-aligned is-center-aligned">
            <div class="column is-5-wide">
              <div class="ts-text">Lv1屬性：{{item.Lv1attr}}</div>
            </div>
            <div class="column is-fluid">
              <div class="ts-text">效果：{{item.Lv1}}</div>
            </div>
          </div>
          <div class="ts-divider"></div>
          <div class="ts-grid is-middle-aligned is-center-aligned">
            <div class="column is-5-wide">
              <div class="ts-text">Lv2屬性：{{item.Lv2attr}}</div>
            </div>
            <div class="column is-fluid">
              <div class="ts-text">效果：{{item.Lv2}}</div>
            </div>
          </div>
          <div class="ts-divider"></div>
          <div class="ts-grid is-middle-aligned is-center-aligned">
            <div class="column is-5-wide">
              <div class="ts-text">Lv3屬性：{{item.Lv3attr}}</div>
            </div>
            <div class="column is-fluid">
              <div class="ts-text">效果：{{item.Lv3}}</div>
            </div>
          </div>
          <div class="ts-divider"></div>
          <div class="ts-grid is-middle-aligned is-center-aligned">
            <div class="column is-5-wide">
              <div class="ts-text">速度：{{item.speed}}</div>
            </div>
            <div class="column is-fluid">
              <div class="ts-text">參考：{{item.notion}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('farm-rec', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/farm-rec.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-3-columns desktop+:is-5-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">等級：{{ item.skillLv }}</div>
          <div class="ts-grid g-0">
            <div class="column">
              <div class="ts-text">材料：</div>
            </div>
            <div class="column">
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.item">
                  {{ sp }}
                </div>
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
Vue.component('equi-mater', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/equi-mater.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">取得：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="spantag in item.get">
              {{spantag}}
            </div>
          </div>
          <div class="ts-text">難度：{{ item.difficulty }}</div>
          <div class="ts-text">屬性：{{ item.attr }}</div>
          <div class="ts-text">攻擊：{{ item.atk }}</div>
          <div class="ts-text">防禦：{{ item.def }}</div>
          <div class="ts-text">魔攻：{{ item.matk }}</div>
          <div class="ts-text">魔防：{{ item.mdef }}</div>
          <div class="ts-text">力量：{{ item.str }}</div>
          <div class="ts-text">體力：{{ item.vit }}</div>
          <div class="ts-text">智力：{{ item.int }}</div>
          <div class="ts-text">特殊能力：{{ item.sp }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('decor-rec', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/decor-rec.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">等級：{{ item.skillLv }}</div>
          <div class="ts-grid g-0">
            <div class="column">
              <div class="ts-text">材料：</div>
            </div>
            <div class="column">
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.item">
                  {{ sp }}
                </div>
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
Vue.component('acce-cap', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/acce-cap.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">屬性：{{ item.attr }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('shoe-cap', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/shoe-cap.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">防禦：{{ item.def }}</div>
          <div class="ts-text">魔防：{{ item.mdef }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text">特殊效果：{{ item.se }}</div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('het-cap', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/het-cap.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">防禦：{{ item.def }}</div>
          <div class="ts-text">魔防：{{ item.mdef }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text">特殊效果：{{ item.se }}</div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('shield-cap', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/shield-cap.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">防禦：{{ item.def }}</div>
          <div class="ts-text">屬性：{{ item.attr }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text">特殊效果：{{ item.se }}</div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('crop-info', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/crop-info.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">種子買價：{{ item.seedBuy }}</div>
          <div class="ts-text">成長天數：{{ item.seedSell }}</div>
          <div class="ts-text">連作：{{ item.seedSell }}</div>
          <div class="ts-text">作物買價：{{ item.seedSell }}</div>
          <div class="ts-text">作物賣價：{{ item.seedSell }}</div>
          <div class="ts-text">Lv10賣價：{{ item.seedSell }}</div>
          <div class="ts-text">持續時間：{{ item.time }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{sp}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('cooking-rec', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/cooking-rec.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    }
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">等級：{{ item.skillLv }}</div>
          <div class="ts-text">持續時間：{{ item.time }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">材料：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="it in item.item">
              {{it}}
            </div>
          </div>
          <div class="ts-wrap g-0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{sp}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('no-cooking-cap', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/no-cooking-cap.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    }
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:p-0" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">買價：{{ item.buy }}</div>
          <div class="ts-text">賣價：{{ item.sell }}</div>
          <div class="ts-text">持續時間：{{ item.time }}</div>
          <div class="ts-wrap g-0">
            <div class="ts-text">效果：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{sp}}
            </div>
          </div>
          <div class="ts-text">說明：{{item.notion}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('drug-rec', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/drug-rec.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-4-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in dataList" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">等級：{{ item.skillLv }}</div>
          <div class="ts-grid g-0">
            <div class="column">
              <div class="ts-text">材料：</div>
            </div>
            <div class="column">
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.list">
                  {{ sp }}
                </div>
              </div>
            </div>
          </div>
          <div class="ts-space is-small"></div>
          <div class="ts-grid g-0">
            <div class="column">
              <div class="ts-text">效果：</div>
            </div>
            <div class="column">
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
                  {{ sp }}
                </div>
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
Vue.component('fish-town', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/fish-town.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns">
      <div class="column">
        <fieldset class="ts-fieldset">
          <legend>春天</legend>
          <div class="ts-list is-unordered">
            <div class="item" v-for="item in lists.data.spring">
              {{item}}
            </div>
          </div>
        </fieldset>
      </div>
      <div class="column">
        <fieldset class="ts-fieldset">
          <legend>夏天</legend>
          <div class="ts-list is-unordered">
            <div class="item" v-for="item in lists.data.summer">
              {{item}}
            </div>
          </div>
        </fieldset>
      </div>
      <div class="column">
        <fieldset class="ts-fieldset">
          <legend>秋天</legend>
          <div class="ts-list is-unordered">
            <div class="item" v-for="item in lists.data.autumn">
              {{item}}
            </div>
          </div>
        </fieldset>
      </div>
      <div class="column">
        <fieldset class="ts-fieldset">
          <legend>冬天</legend>
          <div class="ts-list is-unordered">
            <div class="item" v-for="item in lists.data.east">
              {{item}}
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('fish-maze', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/fish-maze.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => {
          console.warn(error)
        });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns">
      <div class="column" v-for="(item, index) in lists.list" :key="index">
        <fieldset class="ts-fieldset">
          <legend>{{ item.name }}</legend>
          <div class="ts-list is-unordered">
            <div class="item" v-for="it in item.data">{{it}}</div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('maze-data', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/maze-data.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <details class="ts-accordion">
    <summary>說明</summary>
    <div class="ts-list is-unordered">
      <div class="item ts-text">以下怪物資料包含怪物名稱、抗性、喜愛物、掉落物品、可採集的出產品、以及出現區域</div>
      <div class="item ts-text">送東西給魔物有機率可以捕獲魔物，花草/木材/農具/首飾/農作物/水果/素材/料理等等</div>
      <div class="item ts-text">魔物頭上會出現愛心標誌，成功了可以取名字，失敗了愛心變骷髏，可以重複贈送</div>
      <div class="item ts-text">送魔物喜愛物品，或者在送物品之前用刷子撫摸魔物出現高興的音符標誌，能夠提高抓怪物的成功率</div>
      <div class="item ts-text">摩可摩可的出產物品，不僅會掉落在怪物小屋內，也可以使用毛剪去剪</div>
      <div class="item ts-text">牛奶、雞蛋、蜂蜜出產物的品質等級等於飼養怪物的好感度等級+1</div>
      <div class="item ts-text">可騎乘同伴魔物，按A可以上下坐騎，XYB進行攻擊</div>
      <div class="item ts-text">關於魔物對各屬性的抗性說明：+4是吸收，+3是無效，+2是1/8倍，+1是減半，-1是1.5倍，-2是3倍</div>
    </div>
  </details>
  <div class="ts-space"></div>
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
      {{ lists.category }}
    </button>
  </div>
  <div class="ts-space"></div>
  <div class="ts-segment mobile-:maze-mobile-seg" :data-name="lists.tab" v-for="(lists, i) in dataList">
    <div class="ts-grid mobile-:is-1-columns tablet:is-2-columns desktop+:is-3-columns">
      <div class="column" v-for="(item, index) in lists.data" :key="index">
        <fieldset class="ts-fieldset">
          <legend>{{ item.name }}</legend>
          <div class="ts-content">
            <div class="ts-wrap g-0">
              <div class="ts-text">抗性：</div>
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-kepall is-spaced is-outlined" v-for="de in item.defattr">
                  {{de}}
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-wrap g-0">
              <div class="ts-text">喜好：</div>
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-kepall is-spaced is-outlined" v-for="lo in item.lover">
                  {{lo}}
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-wrap g-0">
              <div class="ts-text">採集：</div>
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-kepall is-spaced is-outlined" v-for="dr in item.dropitem">
                  {{dr}}
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-wrap g-0">
              <div class="ts-text">掉落：</div>
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-kepall is-spaced is-outlined" v-for="ge in item.getitem">
                  {{ge}}
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-wrap g-0">
              <div class="ts-text">地區：</div>
              <div class="ts-wrap is-compact">
                <div class="ts-chip is-kepall is-spaced is-outlined" v-for="ar in item.area">
                  {{ar}}
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('hanayome', {
  data() {
    return {
      dataList: null,
      taskList: null,
      taskdata: {},
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/hanayome.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
      fetch('../json/hanatask.json').then((res) => res.json())
        .then((data) => { this.taskList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  methods: {
    getTaskData(tag) {
      this.taskdata = this.taskList.find(el => el.tag == tag);
      this.scrollTop();
    },
    scrollTop() {
      const taskContent = document.querySelector('#taskContent');
      taskContent.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  template: `
<div class="ts-content mobile-:p-0">
  <details class="ts-accordion">
    <summary>說明</summary>
    <div class="ts-list is-unordered" style="margin-top: .4rem;margin-bottom: .4rem;padding: .4rem;">
      <div class="item ts-text">結婚必要條件 → 花嫁愛情度10心、完成花嫁9個依賴任務、雙人床(雜貨店15000G+木材80個購買)、訂婚戒指</div>
      <div class="item ts-text">提高愛情度的方法 → 就是每天的對話、每天送最愛/喜歡/一般的3種禮物、使用對方喜歡的香水味道、達成任務、與她約會等</div>
      <div class="item ts-text">好感度變數，僅供參考</div>
      <div class="ts-list is-unordered">
        <div class="item ts-text">對話+4 (1日1次)</div>
        <div class="item ts-text">送一般的禮物+5 (1日1次)</div>
        <div class="item ts-text">送喜歡的禮物+9 (1日1次)</div>
        <div class=" item ts-text">送最愛的禮物+15 (1日1次)</div>
        <div class="item ts-text">送討厭的禮物-5 (1日多次)</div>
        <div class=" item ts-text">一般/喜歡/最愛的禮物，這3種可以並用疊加效果。</div>
        <div class="item ts-text">生日禮物好感度上升值為普通時候的2倍，同時下降值也是普通時候的2倍</div>
        <div class=" item ts-text">對香水作出反應的話+4 (1日1次)</div>
        <div class="item ts-text">完成委託任務+10</div>
        <div class=" item ts-text">節日獲得優勝+10</div>
        <div class="item ts-text">約會活動好感度不變</div>
        <div class=" item ts-text">1周(6日)以上不對話，對話會出現特別語句，好感度不下降。愛情度10心可維持2</div>
      </div>
    </div>
  </details>
  <div class="ts-segment tablet-:p-0">
    <div class="ts-grid tablet-:is-1-columns desktop:is-1-columns widescreen+:is-2-columns">
      <div class="column" v-for="(item , index) in dataList">
        <div class="ts-segment is-bottom-indicated is-accent">
          <div class="ts-wrap tablet-:is-vertical tablet-:is-center-aligned" style="flex-wrap: nowrap;">
            <div class="ts-image is-covered">
              <img :src="item.img">
            </div>
            <div class="ts-segment border-0">
              <div class="ts-header">
                <div class="ts-text">{{ item.name }} </div>
                <button class="ts-button is-short is-dense is-small is-accent" data-toggle="taskModal:is-visible"
                  style="margin-left: .8rem;" v-on:click="getTaskData(item.tag)">委託列表</button>
              </div>
              <div class="ts-text is-secondary">CV.{{ item.cv }} </div>
              <div class="ts-text" v-html="item.summary"></div>
              <div class="ts-text"> 生日 {{ item.Birthday }} </div>
              <div class="ts-text"> 居住地 {{ item.residence }} </div>
              <div class="ts-divider is-section"></div>
              <div class="ts-grid ts-segment border-0 p-0">
                <div class="column"> 香水 </div>
                <div class="column">
                  <div class="ts-wrap is-compact">
                    <div class="ts-chip is-outlined" v-for="it in item.perfume"> {{ it }} </div>
                  </div>
                </div>
              </div>
              <div class="ts-divider is-section"></div>
              <div class="ts-grid ts-segment border-0 p-0">
                <div class="column"> 便當 </div>
                <div class="column">
                  <div class="ts-wrap is-compact">
                    <div class="ts-chip is-outlined" v-for="it in item.bento"> {{ it }} </div>
                  </div>
                </div>
              </div>
              <div class="ts-text" v-show="item.tag=='Shara'">
                <div class="ts-divider is-section"></div>
                ※樸素的花包括托伊藥草、月落草/月淚草、粉紅貓、魅藍草4種，高級的花包括除上述4種花以外13種
              </div>
            </div>
          </div>
          <div class="ts-wrap is-vertical g-0">
            <div class="ts-grid ts-segment border-0 p-0">
              <div class="column">
                <div class="ts-text">最愛</div>
              </div>
              <div class="column">
                <div class="ts-wrap is-compact">
                  <div class="ts-chip is-outlined" v-for="it in item.favorite"> {{ it }} </div>
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-grid ts-segment border-0 p-0">
              <div class="column"> 喜歡 </div>
              <div class="column">
                <div class="ts-wrap is-compact">
                  <div class="ts-chip is-outlined" v-for="it in item.like"> {{ it }} </div>
                </div>
              </div>
            </div>
            <div class="ts-divider is-section"></div>
            <div class="ts-grid ts-segment border-0 p-0">
              <div class="column"> 討厭 </div>
              <div class="column">
                <div class="ts-wrap is-compact">
                  <div class="ts-chip is-outlined" v-for="it in item.Hate"> {{ it }} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ts-modal is-large" data-name="taskModal">
        <div class="content">
          <div class="ts-content is-dense">
            <div class="ts-header" style="align-items: center;">{{ taskdata.name }} 委託列表
              <span class="ts-close" data-toggle="taskModal:is-visible" v-on:click="scrollTop"></span>
            </div>
          </div>
          <div class="ts-divider"></div>
          <div id="taskContent" class="ts-content" style="max-height: 70vh; overflow-y: auto;">
            <div class="ts-box" style="padding: .4rem;" v-for="data in taskdata.list">
              <div class="ts-text">任務名稱：{{ data.task }}</div>
              <div class="ts-text">接取條件：{{ data.accept }}</div>
              <div class="ts-text">接取地點：{{ data.location }}</div>
              <div class="ts-wrap g-0">
                <div class="ts-text">任務內容：</div>
                <div class="ts-text" v-html="data.content"></div>
              </div>
              <div class="ts-divider is-section"></div>
              <div class="ts-wrap g-0">
                <div class="ts-text">報酬：</div>
                <div class="ts-wrap is-compact">
                  <div class="ts-chip is-outlined" v-for="re in data.reward"> {{re}} </div>
                </div>
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
Vue.component('villagers', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/villagers.json')
        .then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  template: `
<div class="ts-content">
  <div class="ts-header">
    ※ 部分物品名稱取自英文wiki，並且機翻，可能需要自行通靈。
  </div>
  <div class="ts-segment mobile-:p-0">
    <div class="ts-grid tablet-:is-1-columns desktop+:is-2-columns">
      <div class="column" v-for="(item , index) in dataList">
        <div class="ts-segment is-bottom-indicated is-accent">
          <div class="ts-wrap tablet-:is-vertical tablet-:is-center-aligned" style="flex-wrap: nowrap;">
            <div class="ts-image is-covered">
              <img :src="item.img" style="width:10rem;height: auto;">
            </div>
            <div class="ts-segment border-0">
              <div class="ts-header">
                <div class="ts-text">{{item.name}}</div>
              </div>
              <div class="ts-wrap is-vertical g-0">
                <div class="ts-grid ts-segment border-0 mobile-:p-0 is-1-columns">
                  <div class="column"> 最愛 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.favorite"> {{it}} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-divider is-section"></div>
                <div class="ts-grid ts-segment border-0 mobile-:p-0 is-1-columns">
                  <div class="column"> 喜歡 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.like"> {{it}} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-divider is-section"></div>
                <div class="ts-grid ts-segment border-0 mobile-:p-0 is-1-columns">
                  <div class="column"> 討厭 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.Hate"> {{it}} </div>
                    </div>
                  </div>
                </div>
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
Vue.component('sell-log', {
  data() {
    return {
      dataList: null,
      localKey: 'sellLogData'
    };
  },
  created() {
    if (localStorage.getItem(this.localKey)) {
      this.dataList = JSON.parse(localStorage.getItem(this.localKey));
    } else if (!this.dataList) {
      this.getFetchData();
    };
  },
  methods: {
    activateMain(index) {
      this.dataList.forEach((tabOne) => {
        tabOne.active = false;
      });
      this.dataList[index].active = true;
    },
    activateMinor(index, tabOne) {
      tabOne.data.forEach((tabTwo) => {
        tabTwo.active = false;
      });
      tabOne.data[index].active = true;
    },
    saveJson() {
      localStorage.setItem(this.localKey, JSON.stringify(this.dataList));
    },
    deleteSave() {
      localStorage.removeItem(this.localKey);
      this.getFetchData();
    },
    getFetchData() {
      fetch('../json/all-item-log.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    }
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header">
    <div class="ts-wrap is-middle-aligned">
      <div class="ts-text"> ※ 點選頁籤切換，將自動存檔於瀏覽器。(數量僅供參考) </div>
      <button class="ts-button is-small is-outlined" v-on:click="deleteSave">清除紀錄</button>
    </div>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab mobile-:is-stacked">
    <button class="item is-accent main-tab" v-for="(main, index) in dataList" :key="index"
      :class="['item', { 'is-active': main.active }]" :data-tab="main.tab" v-on:click="activateMain(index)">
      <div class="text"> {{ main.id }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div v-for="(main, index) in dataList" :key="index" :class="{ 'u-hidden': !main.active }" :data-name="main.tab">
    <div class="ts-tab is-small is-secondary">
      <button v-for="(minor, index) in main.data" :key="index" class="item is-accent minor-tab"
        :class="['item', 'tablist', { 'is-active': minor.active }]" :data-tab="minor.tab"
        v-on:click="activateMinor(index, main)">
        <div class="text"> {{ minor.category }}</div>
      </button>
    </div>
    <div class="ts-space is-small"></div>
    <div class="ts-segment" v-for="(minor, index) in main.data" :key="index" v-show="minor.active">
      <div class="ts-grid mobile-:is-stacked" style="padding:.5rem;">
        <div class="column is-4-wide" v-for="(item, index) in minor.list" :key="index">
          <label class="ts-checkbox is-kepall">
            <input type="checkbox" v-model="item.checked" :checked="item.checked" v-on:change="saveJson" />
            {{ item.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('task-list', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/task-list.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  methods: {
    activateMain(index) {
      this.dataList.forEach((tabOne) => {
        tabOne.active = false;
      });
      this.dataList[index].active = true;
    }
  },
  template: `
<div class="ts-content">
  <div class="ts-header"></div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab mobile-:is-stacked">
    <button class="item is-accent main-tab" v-for="(main, index) in dataList"
      :class="['item', { 'is-active': main.active }]" :data-tab="main.tag" v-on:click="activateMain(index)">
      <div class="text"> {{ main.name }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-segment mobile-:p-0">
    <div class="">
      <div class="ts-grid mobile-:is-1-columns tablet+:is-2-columns desktop+:is-3-columns"
        v-for="(main, index) in dataList" :data-name="main.tag">
        <div class="column ts-segment is-bottom-indicated is-accent" v-for="ta in main.list">
          <div class="ts-text">任務名稱：{{ta.task}}</div>
          <div class="ts-wrap is-top-aligned g-0">
            <div class="ts-text">接受條件：</div>
            <div class="ts-text" style="word-break: keep-all;" v-html="ta.accept"></div>
          </div>
          <div class="ts-text">接受地點：{{ta.location}}</div>
          <div class="ts-divider is-section"></div>
          <div class="ts-wrap is-top-aligned g-0">
            <div class="ts-text">任務內容：</div>
            <div class="ts-text" style="word-break: keep-all;" v-html="ta.content"></div>
          </div>
          <div class="ts-divider is-section"></div>
          <div class="ts-wrap is-top-aligned g-0">
            <div class="ts-text">任務報酬：</div>
            <div class="ts-text">
              <span class="ts-chip is-end-spaced" v-for="re in ta.reward"> {{re}} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('easy-kill-task', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/easy-kill-task.json').then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    };
  },
  methods: {
    activateMain(index) {
      this.dataList.forEach((tabOne) => {
        tabOne.active = false;
      });
      this.dataList[index].active = true;
    }
  },
  template: `
<div class="ts-content">
  <div class="ts-header"></div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab mobile-:is-stacked">
    <button class="item is-accent main-tab" v-for="(main, index) in dataList"
      :class="['item', { 'is-active': main.active }]" :data-tab="main.tag" v-on:click="activateMain(index)">
      <div class="text"> {{ main.name }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-segment" v-for="task in dataList" :data-name="task.tag">
    <div class="ts-grid is-2-columns mobile-:is-stacked">
      <div class="column task" v-show="task.easyTask.length>0">
        <div class="ts-header">普通任務</div>
        <div class="ts-segment is-bottom-indicated is-accent" v-for="es in task.easyTask">
          <div class="ts-text">任務名稱： {{es.taskName}} </div>
          <div class="ts-text">接受地點： {{es.location}} </div>
          <div class="ts-wrap is-top-aligned g-0">
            <div class="ts-text">任務內容：</div>
            <div class="ts-text" style="word-break: keep-all;" v-html="es.content"></div>
          </div>
        </div>
      </div>
      <div class="column task" v-show="task.killTask.length>0">
        <div class="ts-header">討伐任務</div>
        <div class="ts-segment is-bottom-indicated is-accent" v-for="ki in task.killTask">
          <div class="ts-text">任務名稱： {{ki.taskName}} </div>
          <div class="ts-text">接受地點： {{ki.location}} </div>
          <div class="ts-wrap is-top-aligned g-0">
            <div class="ts-text">任務內容：</div>
            <div class="ts-text" style="word-break: keep-all;" v-html="ki.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('make', {
  data() {
    return {
      dataList: null,
      localKey: 'makelogdata',
      url: '../json/category-make.json',
      checkDelete: false,
      updataKey: 'jsonMakeUpdataCheck',
      haveUpdata: false,
      jsonVersion: '1.3'
    }
  },
  created() {
    this.checkUpdata();
    if (localStorage.getItem(this.localKey)) {
      this.dataList = JSON.parse(localStorage.getItem(this.localKey));
    } else if (!this.dataList) {
      this.getFetchData();
    };
  },
  methods: {
    saveJson() {
      localStorage.setItem(this.localKey, JSON.stringify(this.dataList));
    },
    deleteSave() {
      localStorage.removeItem(this.localKey);
      this.checkDelete = false;
      this.getFetchData();
    },
    getFetchData() {
      fetch(this.url).then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    },
    updataJSON() {
      const oldData = JSON.parse(localStorage.getItem(this.localKey)) || [];
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          const newData = data;
          // 更新資料
          newData.forEach((newCategory) => {
            const oldCategory = oldData.find(
              (oldCategory) => oldCategory.category === newCategory.category
            );
            if (oldCategory) {
              newCategory.list.forEach((newItem) => {
                const oldItem = oldCategory.list.find(
                  (oldItem) => oldItem.id === newItem.id
                );
                if (oldItem) {
                  // 如果舊資料存在，則更新除了checked以外的其他欄位
                  const keys = Object.keys(newItem);
                  keys.forEach((key) => {
                    if (key !== "checked") {
                      oldItem[key] = newItem[key];
                    }
                  });
                } else {
                  // 如果舊資料不存在，則加入新資料，並將 checked 設為 false
                  oldCategory.list.push({
                    ...newItem,
                    checked: false,
                  });
                }
              });
            } else {
              // 如果舊資料的分類不存在，則加入新的分類
              oldData.push(newCategory);
            }
          });
          localStorage.setItem(this.localKey, JSON.stringify(oldData));
          localStorage.setItem(this.updataKey, this.jsonVersion);
          this.checkUpdata();
          this.dataList = oldData;
        });
    },
    checkUpdata() {
      if (localStorage.getItem(this.updataKey)) {
        this.haveUpdata = this.jsonVersion != localStorage.getItem(this.updataKey) ? true : false;
      } else {
        this.haveUpdata = true;
        localStorage.setItem(this.updataKey, this.jsonVersion);
      }
    },
    detailsClose() {
      const details = document.querySelectorAll('.itemlog:not(.u-hidden) details');
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
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header">
    <div class="ts-wrap is-middle-aligned">
      <div class="ts-text"> ※ 點選頁籤切換，將自動存檔於瀏覽器。(需載入一段時間) </div>
      <button class="ts-button is-small is-negative is-outlined" v-show="!checkDelete"
        v-on:click="checkDelete = !checkDelete">清除紀錄</button>
      <button class="ts-button is-small is-negative" v-show="checkDelete" v-on:click="deleteSave">確認刪除</button>
      <button class="ts-button is-small is-secondary" v-show="checkDelete"
        v-on:click="checkDelete = !checkDelete">取消</button>
      <button class="ts-button is-small is-outlined" v-show="!checkDelete" v-on:click="updataJSON">更新資料</button>
      <div class="ts-notice is-small is-dense is-accent" v-show="haveUpdata"><div class="content">偵測到新版本</div></div>
    </div>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab is-small is-secondary">
    <button v-for="(main, index) in dataList" :key="index" class="item is-accent minor-tab"
      :class="['item', 'tablist', { 'is-active': main.active }]" :data-tab="main.tab">
      <div class="text"> {{ main.category }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-segment itemlog" v-for="(main, index) in dataList" :data-name="main.tab" :key="index">
    <div class="ts-grid tablet+:is-3-columns desktop+:is-4-columns mobile-:is-stacked" style="padding:.5rem;">
      <div class="column" v-for="(item, index) in main.list" :key="index">
        <label class="ts-checkbox is-kepall">
          <input type="checkbox" v-model="item.checked" :checked="item.checked" v-on:change="saveJson" />
          {{ item.name }}
        </label>
        <details class="ts-accordion" v-on:click="detailsClose">
          <summary>詳細資料</summary>
          <div class="ts-text is-secondary">{{item.jpName}}</div>
          <div class="ts-text" v-if="item.attr">屬性：{{item.attr}}</div>
          <div class="ts-text" v-if="item.atk">攻擊：{{item.atk}}</div>
          <div class="ts-text" v-if="item.matk">魔攻：{{item.matk}}</div>
          <div class="ts-text" v-if="item.def">防禦：{{item.def}}</div>
          <div class="ts-text" v-if="item.mdef">魔防：{{item.mdef}}</div>
          <div class="ts-wrap is-middle-aligned is-compact" v-if="item.sp.length>0">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-wrap is-middle-aligned is-compact" v-if="item.se">
            <div class="ts-text">特殊效果：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="se in item.se">
              {{ se }}
            </div>
          </div>
          <div class="ts-text" v-if="item.skillLv">等級：{{item.skillLv}}</div>
          <div class="ts-wrap is-middle-aligned is-compact" v-if="item.item">
            <div class="ts-text">材料：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="it in item.item">
              {{it }}
            </div>
          </div>
          <div class="ts-wrap is-vertical g-0" v-if="item.formulaList">
            <div class="ts-text">配方：</div>
            <div class="ts-wrap is-middle-aligned is-compact" v-for="f in item.formulaList">
              <div class="ts-text">等級：{{f.skillLv}}</div>
              <div class="ts-chip is-spaced is-outlined" v-for="fo in f.formula">{{fo}}</div>
            </div>
          </div>
          <div class="ts-text" v-if="item.useRP">消耗RP：{{item.useRP}}</div>
          <div class="ts-text" v-if="item.get">取得：{{item.get}}</div>
          <div class="ts-text" v-if="item.buy">買價：{{item.buy}}</div>
          <div class="ts-text" v-if="item.sell">賣價：{{item.sell}}</div>
        </details>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('cooking', {
  data() {
    return {
      dataList: null,
      localKey: 'cookinglogdata',
      url: '../json/category-cooking.json',
      checkDelete: false,
      updataKey: 'jsonCookingUpdataCheck',
      haveUpdata: false,
      jsonVersion: '1.2'
    }
  },
  created() {
    this.checkUpdata();
    if (localStorage.getItem(this.localKey)) {
      this.dataList = JSON.parse(localStorage.getItem(this.localKey));
    } else if (!this.dataList) {
      this.getFetchData();
    };
  },
  methods: {
    saveJson() {
      localStorage.setItem(this.localKey, JSON.stringify(this.dataList));
    },
    deleteSave() {
      localStorage.removeItem(this.localKey);
      this.checkDelete = false;
      this.getFetchData();
    },
    getFetchData() {
      fetch(this.url).then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    },
    updataJSON() {
      const oldData = JSON.parse(localStorage.getItem(this.localKey)) || [];
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          const newData = data;
          // 更新資料
          newData.forEach((newCategory) => {
            const oldCategory = oldData.find(
              (oldCategory) => oldCategory.category === newCategory.category
            );
            if (oldCategory) {
              newCategory.list.forEach((newItem) => {
                const oldItem = oldCategory.list.find(
                  (oldItem) => oldItem.id === newItem.id
                );
                if (oldItem) {
                  // 如果舊資料存在，則更新除了checked以外的其他欄位
                  const keys = Object.keys(newItem);
                  keys.forEach((key) => {
                    if (key !== "checked") {
                      oldItem[key] = newItem[key];
                    }
                  });
                } else {
                  // 如果舊資料不存在，則加入新資料，並將 checked 設為 false
                  oldCategory.list.push({
                    ...newItem,
                    checked: false,
                  });
                }
              });
            } else {
              // 如果舊資料的分類不存在，則加入新的分類
              oldData.push(newCategory);
            }
          });
          localStorage.setItem(this.localKey, JSON.stringify(oldData));
          localStorage.setItem(this.updataKey, this.jsonVersion);
          this.checkUpdata();
          this.dataList = oldData;
        });
    },
    checkUpdata() {
      if (localStorage.getItem(this.updataKey)) {
        this.haveUpdata = this.jsonVersion != localStorage.getItem(this.updataKey) ? true : false;
      } else {
        this.haveUpdata = true;
        localStorage.setItem(this.updataKey, this.jsonVersion);
      }
    },
    detailsClose() {
      const details = document.querySelectorAll('.itemlog:not(.u-hidden) details');
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
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header">
    <div class="ts-wrap is-middle-aligned">
      <div class="ts-text"> ※ 點選頁籤切換，將自動存檔於瀏覽器。(需載入一段時間) </div>
      <button class="ts-button is-small is-negative is-outlined" v-show="!checkDelete"
        v-on:click="checkDelete = !checkDelete">清除紀錄</button>
      <button class="ts-button is-small is-negative" v-show="checkDelete" v-on:click="deleteSave">確認刪除</button>
      <button class="ts-button is-small is-secondary" v-show="checkDelete"
        v-on:click="checkDelete = !checkDelete">取消</button>
      <button class="ts-button is-small is-outlined" v-show="!checkDelete" v-on:click="updataJSON">更新資料</button>
      <div class="ts-notice is-small is-dense is-accent" v-show="haveUpdata"><div class="content">偵測到新版本</div></div>
    </div>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab is-small is-secondary">
    <button v-for="(main, index) in dataList" :key="index" class="item is-accent minor-tab"
      :class="['item', 'tablist', { 'is-active': main.active }]" :data-tab="main.tab">
      <div class="text"> {{ main.category }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-segment itemlog" v-for="(main, index) in dataList" :data-name="main.tab" :key="index">
    <div class="ts-grid tablet+:is-3-columns desktop+:is-4-columns mobile-:is-stacked" style="padding:.5rem;">
      <div class="column" v-for="(item, index) in main.list" :key="index">
        <label class="ts-checkbox is-kepall">
          <input type="checkbox" v-model="item.checked" :checked="item.checked" v-on:change="saveJson" />
          {{ item.name }}
        </label>
        <details class="ts-accordion" v-on:click="detailsClose">
          <summary>詳細資料</summary>
          <div class="ts-text is-secondary">{{item.jpName}}</div>
          <div class="ts-wrap is-middle-aligned is-compact">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-wrap is-vertical g-0">
            <div class="ts-text">配方：</div>
            <div class="ts-wrap is-middle-aligned is-compact" v-for="f in item.formulaList">
              <div class="ts-text">等級：{{f.skillLv}}</div>
              <div class="ts-chip is-spaced is-outlined" v-for="fo in f.formula">{{fo}}</div>
            </div>
          </div>
          <div class="ts-text" v-if="item.buy">買價：{{item.buy}}</div>
          <div class="ts-text" v-if="item.sell">賣價：{{item.sell}}</div>
        </details>
      </div>
    </div>
  </div>
</div>
`
});
Vue.component('collection', {
  data() {
    return {
      dataList: null,
      localKey: 'collectionlogdata',
      url: '../json/category-collection.json',
      checkDelete: false,
      updataKey: 'jsonCollectionUpdataCheck',
      haveUpdata: false,
      jsonVersion: '1.3'
    }
  },
  created() {
    this.checkUpdata();
    if (localStorage.getItem(this.localKey)) {
      this.dataList = JSON.parse(localStorage.getItem(this.localKey));
    } else if (!this.dataList) {
      this.getFetchData();
    };
  },
  methods: {
    saveJson() {
      localStorage.setItem(this.localKey, JSON.stringify(this.dataList));
    },
    deleteSave() {
      localStorage.removeItem(this.localKey);
      this.checkDelete = false;
      this.getFetchData();
    },
    getFetchData() {
      fetch(this.url).then((res) => res.json())
        .then((data) => { this.dataList = data; })
        .catch((error) => { console.warn(error) });
    },
    updataJSON() {
      const oldData = JSON.parse(localStorage.getItem(this.localKey)) || [];
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          const newData = data;
          // 更新資料
          newData.forEach((newCategory) => {
            const oldCategory = oldData.find(
              (oldCategory) => oldCategory.category === newCategory.category
            );
            if (oldCategory) {
              newCategory.list.forEach((newItem) => {
                const oldItem = oldCategory.list.find(
                  (oldItem) => oldItem.id === newItem.id
                );
                if (oldItem) {
                  // 如果舊資料存在，則更新除了checked以外的其他欄位
                  const keys = Object.keys(newItem);
                  keys.forEach((key) => {
                    if (key !== "checked") {
                      oldItem[key] = newItem[key];
                    }
                  });
                } else {
                  // 如果舊資料不存在，則加入新資料，並將 checked 設為 false
                  oldCategory.list.push({
                    ...newItem,
                    checked: false,
                  });
                }
              });
            } else {
              // 如果舊資料的分類不存在，則加入新的分類
              oldData.push(newCategory);
            }
          });
          localStorage.setItem(this.localKey, JSON.stringify(oldData));
          localStorage.setItem(this.updataKey, this.jsonVersion);
          this.checkUpdata();
          this.dataList = oldData;
        });
    },
    checkUpdata() {
      if (localStorage.getItem(this.updataKey)) {
        this.haveUpdata = this.jsonVersion != localStorage.getItem(this.updataKey) ? true : false;
      } else {
        this.haveUpdata = true;
        localStorage.setItem(this.updataKey, this.jsonVersion);
      }
    },
    detailsClose() {
      const details = document.querySelectorAll('.itemlog:not(.u-hidden) details');
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
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header">
    <div class="ts-wrap is-middle-aligned">
      <div class="ts-text"> ※ 點選頁籤切換，將自動存檔於瀏覽器。(需載入一段時間) </div>
      <button class="ts-button is-small is-negative is-outlined" v-show="!checkDelete"
        v-on:click="checkDelete = !checkDelete">清除紀錄</button>
      <button class="ts-button is-small is-negative" v-show="checkDelete" v-on:click="deleteSave">確認刪除</button>
      <button class="ts-button is-small is-secondary" v-show="checkDelete"
        v-on:click="checkDelete = !checkDelete">取消</button>
      <button class="ts-button is-small is-outlined" v-show="!checkDelete" v-on:click="updataJSON">更新資料</button>
      <div class="ts-notice is-small is-dense is-accent" v-show="haveUpdata"><div class="content">偵測到新版本</div></div>
    </div>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-tab is-small is-secondary">
    <button v-for="(main, index) in dataList" :key="index" class="item is-accent minor-tab"
      :class="['item', 'tablist', { 'is-active': main.active }]" :data-tab="main.tab">
      <div class="text"> {{ main.category }}</div>
    </button>
  </div>
  <div class="ts-space is-small"></div>
  <div class="ts-segment itemlog" v-for="(main, index) in dataList" :data-name="main.tab" :key="index">
    <div class="ts-grid tablet+:is-3-columns desktop+:is-4-columns mobile-:is-stacked" style="padding:.5rem;">
      <div class="column" v-for="(item, index) in main.list" :key="index">
        <label class="ts-checkbox is-kepall">
          <input type="checkbox" v-model="item.checked" :checked="item.checked" v-on:change="saveJson" />
          {{ item.name }}
        </label>
        <details class="ts-accordion" v-on:click="detailsClose">
          <summary>詳細資料</summary>
          <div class="ts-text is-secondary">{{item.jpName}}</div>
          <div class="ts-text" v-if="item.season">季節：{{item.season}}</div>
          <div class="ts-text" v-if="item.MaxCM">最大公分：{{item.MaxCM}}</div>
          <div class="ts-text" v-if="item.day">成長天數：{{item.day}}</div>
          <div class="ts-text" v-if="item.crop">連作：{{item.crop}}</div>
          <div class="ts-wrap is-middle-aligned is-compact" v-if="item.sp">
            <div class="ts-text">特殊能力：</div>
            <div class="ts-chip is-spaced is-outlined" v-for="sp in item.sp">
              {{ sp }}
            </div>
          </div>
          <div class="ts-text" v-if="item.getItem">取得：{{item.getItem}}</div>
          <div class="ts-text" v-if="item.sellStart">開始販售：{{item.sellStart}}</div>
          <div class="ts-text" v-if="item.buy">買價：{{item.buy}}</div>
          <div class="ts-text" v-if="item.sell">賣價：{{item.sell}}</div>
        </details>
      </div>
    </div>
  </div>
</div>
`
});