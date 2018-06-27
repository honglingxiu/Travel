import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
let defaultCity="上海";
try {
  defaultCity=localStorage.city||"湛江";
}catch (e) {

}
export  default new Vuex.Store({
  state:{
    city:defaultCity
  },
  actions:{
    changeCity(ctx,city){
      ctx.commit("change",city);
    }
  },
  mutations:{
    change(state,city){
      localStorage.city=city;
      state.city=city;
    }
  }
})
