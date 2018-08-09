/**
 * Augment the typings of Vue.js
 */
import Framework7 from 'framework7';
import Vue from 'vue';


declare module 'vue/types/vue' {
    interface Vue {
        framework7: Framework7;
        $routes: any[];
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $f7: Framework7;
        $$: Dom7.Dom7;
        Dom7: Dom7.Dom7;
        $device: Framework7.F7Device;
        $request: Framework7.F7Request;
        $utils: Framework7.F7Utils;
        $theme: {
            ios: boolean,
            material: boolean
        };
        $f7router: Framework7.Router;
        $f7route: {
            url: string;
            path: Framework7.RoutePath;
            query: {
                [key: string]: any
            };
            params: {
                [key: string]: any
            };
            name: string;
            hash: string;
            route: object;
            context: {
                [key: string]: any
            };
        }

        onF7Ready($f7: Framework7): void;
        onF7RouteChange(newRoute: Framework7.Route, previousRoute: Framework7.Route, router: Framework7.Router): void;
        onF7RouteChanged(newRoute: Framework7.Route, previousRoute: Framework7.Route, router: Framework7.Router): void;
    }
}


declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        framework7?: {
            theme?: string;
        };

        routes?: {
            path: string;
            component:
                | Component<any, any, any, any>
                | AsyncComponent<any, any, any, any>;
        }[];
    }
}
