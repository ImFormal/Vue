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
    //! ----------------------------Lessons Views routes ----------------------------
  ],
});

export default router;
