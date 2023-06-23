import { ComponentCustomProperties } from "vue";
import { DefaultComponentProps } from "vue-i18n";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $t: DefaultComponentProps["t"];
  }
}
