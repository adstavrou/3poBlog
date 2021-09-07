import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'Header',
    props: {

    },
    data: () => {
        return {
            menuItems: [
                {menuName : 'HTML', menuLink: '#' },
                {menuName : 'CSS', menuLink: '#' },
                {menuName : 'JavaScript', menuLink: '#' },
                {menuName : '3PO Journal', menuLink: '#' },
            ]
        }
    },
    setup: () => {
        console.log('Header');
    }
})