import router from "@/router";

console.log('1234')

router.beforeEach((to: any, from: any) => {
  console.log(4444)
})


router.afterEach((to: any, from: any) => {
  console.log(3333)
})
