 
    import Vue from './vue'
    import { Component } from 'vue'
    import { PluginObject } from 'vue'
    import Framework7 from 'framework7'

    interface VuePlugin extends PluginObject<Framework7> {
        install(vue : typeof Vue, options? : Framework7) : void;
    }
    export const Framework7Vue : VuePlugin;
    export default Framework7Vue;

    export const f7AccordionContent: Component
    export const f7AccordionItem: Component
    export const f7AccordionToggle: Component
    export const f7Accordion: Component
    export const f7ActionsButton: Component
    export const f7ActionsGroup: Component
    export const f7ActionsLabel: Component
    export const f7Actions: Component
    export const f7Badge: Component
    export const f7BlockFooter: Component
    export const f7BlockHeader: Component
    export const f7BlockTitle: Component
    export const f7Block: Component
    export const f7Button: Component
    export const f7CardContent: Component
    export const f7CardFooter: Component
    export const f7CardHeader: Component
    export const f7Card: Component
    export const f7Checkbox: Component
    export const f7Chip: Component
    export const f7Col: Component
    export const f7FabButton: Component
    export const f7FabButtons: Component
    export const f7Fab: Component
    export const f7Icon: Component
    export const f7Input: Component
    export const f7Label: Component
    export const f7Link: Component
    export const f7ListButton: Component
    export const f7ListGroup: Component
    export const f7ListItemCell: Component
    export const f7ListItemContent: Component
    export const f7ListItemRow: Component
    export const f7ListItem: Component
    export const f7List: Component
    export const f7LoginScreenTitle: Component
    export const f7LoginScreen: Component
    export const f7Message: Component
    export const f7MessagebarAttachment: Component
    export const f7MessagebarAttachments: Component
    export const f7MessagebarSheetImage: Component
    export const f7MessagebarSheetItem: Component
    export const f7MessagebarSheet: Component
    export const f7Messagebar: Component
    export const f7MessagesTitle: Component
    export const f7Messages: Component
    export const f7NavLeft: Component
    export const f7NavRight: Component
    export const f7NavTitle: Component
    export const f7Navbar: Component
    export const f7PageContent: Component
    export const f7Page: Component
    export const f7Panel: Component
    export const f7PhotoBrowser: Component
    export const f7Popover: Component
    export const f7Popup: Component
    export const f7Preloader: Component
    export const f7Progressbar: Component
    export const f7Radio: Component
    export const f7Range: Component
    export const f7Row: Component
    export const f7Searchbar: Component
    export const f7Segmented: Component
    export const f7Sheet: Component
    export const f7Statusbar: Component
    export const f7Subnavbar: Component
    export const f7SwipeoutActions: Component
    export const f7SwipeoutButton: Component
    export const f7SwiperSlide: Component
    export const f7Swiper: Component
    export const f7Tab: Component
    export const f7Tabs: Component
    export const f7Toggle: Component
    export const f7Toolbar: Component
    export const f7View: Component
    export const f7Views: Component
 
