# framework7-vue.d.ts
Typescript definitions for framework7-vue by iDangero.us

A work in progress.  Please help out.

As I understand it to work, maintaining this in the centralized @typings registry is more trouble than I'm willing to set up.  But you can still install it pretty easily like this:

```
npm install https://github.com/JasonKleban/framework7-vue.d.ts
```

I've tried a bunch of variations on *including* the following definition in this package, but Typescript refuses to pick it up and instead complains about `framework7` being unexpected in `new Vue({ framework7: ... })`, but if I place it in a framework7-vue-component-options.d.ts in my source folder it works.  Anyone know how to get this into the library and have it be picked up?
```
import Vue, { Component, AsyncComponent, ComponentOptions } from 'vue'

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
```
