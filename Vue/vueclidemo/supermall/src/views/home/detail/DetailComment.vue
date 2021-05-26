<template>
  <div class="detail-comment">
    <div class="comment-header">
      <span>用户评价({{ detailComment.cRate }})</span>
      <span>更多</span>
    </div>
    <div class="comment-container" v-for="item in detailComment.list">
      <div class="comment-user">
        <img class="user-avatar" :src="item.user.avatar" alt="" />
        <span class="user-nickName">{{ item.user.uname }}</span>
      </div>
      <div class="comment-content">
        <p>{{ item.content }}</p>
        <div>
          <span>{{ item.created | formatedate(item.created,that)}}</span>
          <span>{{ item.style }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  components: {},
  props: {
    detailComment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      that: this
    };
  },
  beforeCreate() {
    this.that = this
  },
  filters: {
    formatedate(val,that) {
      console.log(that.$utils);
      return that.$utils.formatDate(val)
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail-comment {
  padding: 15px;
  font-size: 14px;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.comment-user {
  padding: 5px;
  display: flex;
  align-items: center;
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .user-nickName {
    margin-left: 10px;
  }
}
.comment-content {
  padding: 10px;
  p {
    color: #333;
  }
}
</style>
