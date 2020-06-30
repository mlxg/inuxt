<template>
  <div>
    <header>header</header>
    <nav
      id="tab"
      ref="tab"
      :class="[{'tabFixed':fix},'tabList']"
    >
      <div
        v-for="(item,index) in tabList"
        :key="index"
        :class="[{'tab-active':active===index} ,'tab-item']"
        @click="handleSelectTab(item,index)"
      >
        {{ item.name }}
      </div>
    </nav>
    <section ref="content">
      <div v-for="(item,index) in tabList" :key="index" class="item-content">
        <div :class="[{'tab-active':active===index} ,'tab-item']">
          {{ item.name }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '',
      tabList: [{
        id: 1,
        name: '详情'
      }, {
        id: 2,
        name: '评论'
      }, {
        id: 3,
        name: '新闻'
      }, {
        id: 4,
        name: '关于'
      }, {
        id: 5,
        name: '相关'
      }],
      fix: false,
      active: 0
    }
  },
  watch: {
    active () {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleSelectTab (index) {
      this.active = index
    },
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const contents = this.$refs.content.children
      const tab = this.$refs.tab

      this.fix = scrollTop > tab.offsetTop

      for (let i = 0; i < contents.length; i++) {
        console.log(contents[0].offsetTop, contents[1].offsetTop, scrollTop)
        if (contents[contents.length - 1].offsetTop - scrollTop > 80) {
          if (contents[i].offsetTop - scrollTop <= 80 && contents[i + 1].offsetTop - scrollTop > 80) {
            this.active = i + 1
            return false
          }
          this.active = 0
        } else {
          this.active = contents.length
        }
      }
    }
  }
}
</script>

<style scoped>
  header{
    height: 100px;
  }
  section{
    margin-top: 50px;
  }
  nav {
    background: #ffffff;
    height: 50px;

  }
  .tabFixed{
    position: fixed;
    top: 0;
  }
  .tab-item{
    display: inline-block;
  }
  .item-content{
    height: 400px;
  }
  .tab-active{
    color:olivedrab ;
  }
</style>
