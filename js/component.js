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
    <div class="ts-grid is-spaced-around mobile-:is-1-columns tablet+:is-3-columns">
      <div class="column ts-box is-accent is-bottom-indicated" v-for="(item, index) in lists.list" :key="index">
        <div class="ts-content">
          <div class="ts-text">名稱：{{ item.name }}</div>
          <div class="ts-text">屬性：{{ item.attr }}</div>
          <div class="ts-text">攻擊：{{ item.atk }}</div>
          <div class="ts-text">特殊能力：{{ item.sp }}</div>
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

    <div class="ts-grid mobile-:is-1-columns tablet+:is-3-columns desktop+:is-4-columns">
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
  <div class="ts-list is-unordered">
    <div class="item ts-text">以下怪物資料包含怪物名稱、抗性、喜愛物、掉落物品、可採集的出產品、以及出現區域</div>
    <div class="item ts-text">送東西給魔物有機率可以捕獲魔物，花草/木材/農具/首飾/農作物/水果/素材/料理等等</div>
    <div class="item ts-text">魔物頭上會出現愛心標誌，成功了可以取名字，失敗了愛心變骷髏，可以重複贈送</div>
    <div class="item ts-text">送魔物喜愛物品，或者在送物品之前用刷子撫摸魔物出現高興的音符標誌，能夠提高抓怪物的成功率</div>
    <div class="item ts-text">莫可莫可的出產物品，不僅會掉落在怪物小屋內，也可以使用毛剪去剪</div>
    <div class="item ts-text">牛奶、蛋、蜂蜜出產物的品質等級等於飼養怪物的好感度等級+1</div>
    <div class="item ts-text">可騎乘同伴魔物，按A可以上下坐騎，XYB進行攻擊</div>
    <div class="item ts-text">關於魔物對各屬性的抗性說明：+4是吸收，+3是無效，+2是1/8倍，+1是減半，-1是1.5倍，-2是3倍</div>
  </div>
  <div class="ts-space"></div>
  <div class="ts-tab is-pilled" style="justify-content: center;">
    <button class="item is-accent" v-for="(lists, i) in dataList" :data-tab="lists.tab"
      :class="[lists.active?'is-active':'']">
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
    <summary>送禮規則</summary>
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
            <div class="ts-segment">
              <div class="ts-header">
                <div class="ts-text">{{ item.name }} </div>
                <button class="ts-button is-short is-small is-accent" data-toggle="taskModal:is-visible"
                  style="margin-left: .4rem;" v-on:click="getTaskData(item.tag)">委託列表</button>
              </div>
              <div class="ts-text is-secondary">CV.{{ item.cv }} </div>
              <div class="ts-text" v-html="item.summary"></div>
              <div class="ts-text"> 生日 {{ item.Birthday }} </div>
              <div class="ts-text"> 居住地 {{ item.residence }} </div>
              <div class="ts-wrap is-vertical">
                <div class="ts-grid ts-segment border-0">
                  <div class="column"> 香水 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.perfume"> {{ it }} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-text" v-show="item.tag=='Shara'">
                  ※樸素的花包括托伊藥草、月落草/月淚草、粉紅貓、魅藍草4種，高級的花包括除上述4種花以外13種
                </div>
                <div class="ts-grid ts-segment border-0">
                  <div class="column">
                    <div class="ts-text">最愛</div>
                  </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.favorite"> {{ it }} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-grid ts-segment border-0">
                  <div class="column"> 喜歡 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.like"> {{ it }} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-grid ts-segment border-0">
                  <div class="column"> 討厭 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.Hate"> {{ it }} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-grid ts-segment border-0">
                  <div class="column"> 便當 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.bento"> {{ it }} </div>
                    </div>
                  </div>
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
                <div class="ts-text" style="word-break: keep-all;" v-html="data.content"></div>
              </div>
              <div class="ts-divider"></div>
              <div class="ts-wrap">
                <div class="ts-text">報酬</div>
                <div class="ts-list is-unordered">
                  <div class="item" v-for="re in data.reward">{{ re }}</div>
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
            <div class="ts-segment">
              <div class="ts-header">
                <div class="ts-text">{{item.name}}</div>
              </div>
              <div class="ts-wrap is-vertical">
                <div class="ts-grid ts-segment border-0 is-1-columns">
                  <div class="column"> 最愛 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.favorite"> {{it}} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-grid ts-segment border-0 is-1-columns">
                  <div class="column"> 喜歡 </div>
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-outlined" v-for="it in item.like"> {{it}} </div>
                    </div>
                  </div>
                </div>
                <div class="ts-grid ts-segment border-0 is-1-columns">
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

Vue.component('all-item', {
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    if (!this.dataList) {
      fetch('../json/all-item-log.json').then((res) => res.json())
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
    },
    activateMinor(index, tabOne) {
      tabOne.data.forEach((tabTwo) => {
        tabTwo.active = false;
      });
      tabOne.data[index].active = true;
    }
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header"> ※ 點選頁籤切換，需載入一小段時間。 </div>
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
          <div class="ts-text">{{ item.name }}</div>
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
      fetch('../json/all-item-log.json').then((res) => res.json())
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
    },
    activateMinor(index, tabOne) {
      tabOne.data.forEach((tabTwo) => {
        tabTwo.active = false;
      });
      tabOne.data[index].active = true;
    },
    saveJson() {
      localStorage.setItem(this.localKey, JSON.stringify(this.dataList));
    }
  },
  template: `
<div class="tablet+:ts-content">
  <div class="ts-header">※ 點選頁籤切換，將自動存檔於瀏覽器。</div>
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