import Vue from "vue";
import {
  Button,
  Card,
  Checkbox,
  Form,
  FormItem,
  Input,
  Loading
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Loading.directive);
