import createLogger from 'vuex/dist/logger';

export default createLogger({
  collapsed: true, // 自动展开记录的 mutation
  transformer(state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state;
  },
  mutationTransformer(mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation;
  }
});
