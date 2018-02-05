/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import Framework7 from 'framework7'

declare module "vue/types/vue" {
  interface Vue {
    framework7: Framework7;
    $routes: any[];
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
          
      framework7?: {
          theme?: string
      }

      routes?: { 
          path: string, 
          component : Component<any, any, any, any> | AsyncComponent<any, any, any, any> 
      }[]
  }
}
