import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", alias: "/home", name: "Home", component: () => import("../views/HomeView.vue") },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/NotFoundView.vue") },
    { path: "/lesson-router", name: "LessonRouter", component: () => import("../views/LessonRouterView.vue") },
    { path: "/details/:id/:name", name: "Details", component: () => import("../views/DetailsPage.vue"), props: true },
    { path: "/lessons/text-interpolation", name: "Lessons", component: () => import("../views/lessons/LessonTextInterpolation.vue") },
    { path: "/exercices/ex-interpolation", name: "ExerciceInterpolation", component: () => import("../views/exercices/ExerciceInterpolation.vue") },
    { path: "/exercices/ex-fonction", name: "ExerciceFonction", component: () => import("../views/exercices/ExerciceFonction.vue") },
    { path: "/exercices/ex-drmario", name: "ExerciceDrMario", component: () => import("../views/exercices/ExerciceDrMario.vue") },
    { path: "/exercices/ex-count", name: "ExerciceCount", component: () => import("../views/exercices/ExerciceCount.vue") },
    { path: "/exercices/ex-input", name: "ExerciceInput", component: () => import("../views/exercices/ExerciceInput.vue") },
    { path: "/exercices/ex-bug", name: "ExerciceBug", component: () => import("../views/exercices/ExerciceBug.vue") },
    { path: "/exercices/ex-watcher", name: "ExerciceWatcher", component: () => import("../views/exercices/ExerciceWatcher.vue") },
    { path: "/exercices/ex-justeprix", name: "ExerciceJustePrix", component: () => import("../views/exercices/ExerciceJustePrix.vue") },
    { path: "/exercices/ex-card", name: "ExerciceCard", component: () => import("../views/exercices/ExerciceCard.vue") },
    { path: "/exercices/ex-stydyn", name: "ExerciceStylingDyn", component: () => import("../views/exercices/ExerciceStylingDyn.vue") },
    { path: "/exercices/ex-liste", name: "ExerciceListe", component: () => import("../views/exercices/ExerciceListe.vue") },
    { path: "/exercices/ex-listecourse", name: "ExerciceListeCourse", component: () => import("../views/exercices/ExerciceListeCourse.vue") },
    { path: "/exercices/ex-props", name: "ExerciceProps", component: () => import("../views/exercices/ExoPropsView.vue") },
    { path: "/exercices/ex-props2", name: "ExerciceProps2", component: () => import("../views/exercices/ExoPropsView2.vue") },
    { path: "/exercices/ex-props3", name: "ExerciceProps3", component: () => import("../views/exercices/ExoPropsView3.vue") },
    { path: "/exercices/ex-combat", name: "ExerciceCombat", component: () => import("../views/exercices/ExerciceCombat.vue") },
    { path: "/api-fetcher", name: "ApiFetcher", component: () => import("../views/exercices/ApiFetcher.vue") },
    { path: "/exercices/emit", name: "Emit", component: () => import("../views/exercices/EmitParent.vue") }
  ]
});

export default router;
