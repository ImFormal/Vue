<template>
    <EmitOneFriendIdComp
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :unAmiName="unAmi.name" 
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="reactionStatus"
    ></EmitOneFriendIdComp>
</template>

<script setup lang='js'>
import { ref, defineAsyncComponent } from "vue";
const EmitOneFriendIdComp = defineAsyncComponent(() => import('../../components/Emit.vue'))
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    }
]);

function reactionStatus(leIdDansUnAmi) {
    // alert(`Top délire : J'arrive à réagir dans le parent 
    // à l'event "mon-eventpremium" qui est déclenché par le composant ENFANT `);
    const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
    console.log('amiIdentified : ', unAmiIdentified);
    unAmiIdentified.premium = !unAmiIdentified.premium;
    console.log('amiIdentified : ', unAmiIdentified);
}

</script>