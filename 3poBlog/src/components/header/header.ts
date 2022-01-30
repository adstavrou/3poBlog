import { ref, defineComponent } from 'vue'
import db from '../../services/firebase'
import {collection, getDocs} from "firebase/firestore";

const collectionNavigation = await getDocs(collection(db, 'navigation'));
const mapNavigation: Array<object> = [];


collectionNavigation.forEach((doc) => {
    mapNavigation.push(doc.data());
})


console.log('test',mapNavigation);

export default defineComponent({
    name: 'Header',
    props: {

    },
    data: () => {
        return {
            menuItems: mapNavigation,
            dataMenuItems: {

            }
        }
    },
    created: () => {
        console.log('test',db);
    },

    mounted: () => {

    },

    setup: () => {
        console.log('Header');

    }
})
