import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", alias: "/home", name: "Home", component: () => import("../views/HomeView.vue") },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/NotFoundView.vue") },
    { path: "/lesson-router", name: "LessonRouter", component: () => import("../views/LessonRouterView.vue") , meta: {requiresAuth: true}},
    { path: "/details/:id/:name", name: "Details", component: () => import("../views/DetailsPage.vue"), props: true , meta: {requiresAuth: true}},
    { path: "/lessons/text-interpolation", name: "Lessons", component: () => import("../views/lessons/LessonTextInterpolation.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-interpolation", name: "ExerciceInterpolation", component: () => import("../views/exercices/ExerciceInterpolation.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-fonction", name: "ExerciceFonction", component: () => import("../views/exercices/ExerciceFonction.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-drmario", name: "ExerciceDrMario", component: () => import("../views/exercices/ExerciceDrMario.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-count", name: "ExerciceCount", component: () => import("../views/exercices/ExerciceCount.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-input", name: "ExerciceInput", component: () => import("../views/exercices/ExerciceInput.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-bug", name: "ExerciceBug", component: () => import("../views/exercices/ExerciceBug.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-watcher", name: "ExerciceWatcher", component: () => import("../views/exercices/ExerciceWatcher.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-justeprix", name: "ExerciceJustePrix", component: () => import("../views/exercices/ExerciceJustePrix.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-card", name: "ExerciceCard", component: () => import("../views/exercices/ExerciceCard.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-stydyn", name: "ExerciceStylingDyn", component: () => import("../views/exercices/ExerciceStylingDyn.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-liste", name: "ExerciceListe", component: () => import("../views/exercices/ExerciceListe.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-listecourse", name: "ExerciceListeCourse", component: () => import("../views/exercices/ExerciceListeCourse.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-props", name: "ExerciceProps", component: () => import("../views/exercices/ExoPropsView.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-props2", name: "ExerciceProps2", component: () => import("../views/exercices/ExoPropsView2.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-props3", name: "ExerciceProps3", component: () => import("../views/exercices/ExoPropsView3.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/ex-combat", name: "ExerciceCombat", component: () => import("../views/exercices/ExerciceCombat.vue"), meta: {requiresAuth: true} },
    { path: "/api-fetcher", name: "ApiFetcher", component: () => import("../views/exercices/ApiFetcher.vue") , meta: {requiresAuth: true}},
    { path: "/exercices/emit", name: "Emit", component: () => import("../views/exercices/EmitParent.vue") , meta: {requiresAuth: true}},
    { path: "/Eval", name: "Eval", component: () => import("../views/Eval.vue") , meta: {requiresAuth: true}},
    { path: "/register", name: "Register", component: () => import("../views/RegisterPageView.vue") },
    { path: "/login", name: "Login", component: () => import("../views/LoginPageView.vue") }
  ]
});

//Vérification de si on est connecté ou pas
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  console.log(currentUser);

  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!currentUser) {
          next({ name: "Login" }); 
      } else {
          next();
      }
  } else {
      next();
  }
});

export default router;
