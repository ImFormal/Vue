import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/lessons/text-interpolation",
      name: "Lessons",
      component: () => import("../views/lessons/LessonTextInterpolation.vue"),
    },
    {
      path: "/exercices/ex-interpolation",
      name: "ExerciceInterpolation",
      component: () => import("../views/exercices/ExerciceInterpolation.vue"),
    },
    {
      path: "/exercices/ex-fonction",
      name: "ExerciceFonction",
      component: () => import("../views/exercices/ExerciceFonction.vue"),
    },
    {
      path: "/exercices/ex-drmario",
      name: "ExerciceDrMario",
      component: () => import("../views/exercices/ExerciceDrMario.vue"),
    },
    {
      path: "/exercices/ex-count",
      name: "ExerciceCount",
      component: () => import("../views/exercices/ExerciceCount.vue"),
    },
    {
      path: "/exercices/ex-input",
      name: "ExerciceInput",
      component: () => import("../views/exercices/ExerciceInput.vue"),
    },
    {
      path: "/exercices/ex-bug",
      name: "ExerciceBug",
      component: () => import("../views/exercices/ExerciceBug.vue"),
    },
    {
      path: "/exercices/ex-watcher",
      name: "ExerciceWatcher",
      component: () => import("../views/exercices/ExerciceWatcher.vue"),
    },
    {
      path: "/exercices/ex-justeprix",
      name: "ExerciceJustePrix",
      component: () => import("../views/exercices/ExerciceJustePrix.vue"),
    },
    {
      path: "/exercices/ex-card",
      name: "ExerciceCard",
      component: () => import("../views/exercices/ExerciceCard.vue"),
    },
    {
      path: "/exercices/ex-stydyn",
      name: "ExerciceStylingDyn",
      component: () => import("../views/exercices/ExerciceStylingDyn.vue"),
    },
    {
      path: "/exercices/ex-liste",
      name: "ExerciceListe",
      component: () => import("../views/exercices/ExerciceListe.vue"),
    },
    //! ----------------------------Lessons Views routes ----------------------------
  ],
});

export default router;
