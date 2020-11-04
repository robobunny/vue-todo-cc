import Vue from "vue";
import { Button, Checkbox, Form, FormItem, Input } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);