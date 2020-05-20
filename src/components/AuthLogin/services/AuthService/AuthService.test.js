// import React from 'react';
// import AuthService from '.';
// import signInResponse from '../../fixtures/SignInResponse/index.json';


// /*global expect,jest*/
// describe("",()=>{
//     let authAPI;
    
//     beforeEach(()=>{
//         authAPI=new AuthService();
//     });
//     // it("",()=>{
//     //   authAPI.signInAPI();
//     //   console.log(authAPI.api);
//     //   expect(authAPI.api).toBe(signInResponse);
//     // });
    
//     it("should render success state",async()=>{
      
//       const  getPromise=new Promise(function(resolve,reject){
//           resolve(signInResponse);
//       });
      
//       const mockSignInAPI=jest.fn();
//       mockSignInAPI.mockReturnValue(getPromise);
//       authAPI.signInAPI=mockSignInAPI;
//       console.log(authAPI.api);
//     //   await authStore.userSignIn(1,onSuccess,onFailure);
      
//     //   expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
//     //   expect(onSuccess).toBeCalled();
//     //   expect(onFailure).not.toBeCalled();
//   });
  
// })