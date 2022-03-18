import { ref, defineComponent } from 'vue'
import db from '../../services/firebase'
import {collection, getDocs} from "firebase/firestore";

const collectionNavigation = await getDocs(collection(db, 'navigation'));
const mapNavigation: Array<object> = [];

export default defineComponent({
    name: 'Header',
    props: {

    },
    data: () => {

        return {
            menuItems: mapNavigation
        }
    },

    methods: {

    },

    created: () => {
        console.log('test',db);

    },

    mounted: () => {

    },

    setup: () => {
        console.log('Header');
        collectionNavigation.forEach((doc) => {
            mapNavigation.push({docID: doc.id,  ...(doc.data())});
        });

    }
})
