/*
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth, StepupAuth, StepupAuthForce, StepupAuthAlways } from './SecureRoute';
import Home from '../pages/Home';
import Loading from './Loading';
import Messages from '../pages/Messages';
import PrivateMessages from '../pages/PrivateMessages';
import Profile from '../pages/Profile';
import Scenarios from '../pages/Scenarios';
import Stepup from '../pages/Stepup';
import Transaction from '../pages/CIBATransaction';
import DPOPCallback from './DPOPCallback';
import SLO from '../components/SLO';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="login/callback" element={<LoginCallback loadingElement={<Loading/>}/>}/>
      <Route path="login/dpop" element={<DPOPCallback loadingElement={<Loading/>}/>}/>
      <Route path="/messages" element={<RequiredAuth/>}>
        <Route path="" element={<Messages/>}/>
      </Route>
      <Route path="/privateMessages" element={<RequiredAuth/>}>
        <Route path="" element={<PrivateMessages/>}/>
      </Route>
      <Route path="/profile" element={<RequiredAuth/>}>
        <Route path="" element={<Profile/>}/>
      </Route>
      <Route path="/scenarios" element={<RequiredAuth/>}>
        <Route path="" element={<Scenarios/>}/>
      </Route>
      <Route path="/stepup" element={<StepupAuth/>}>
        <Route path="" element={<Stepup/>}/>
      </Route>
      <Route path="/stepupAlways" element={<StepupAuthAlways/>}>
        <Route path="" element={<Stepup/>}/>
      </Route>
      <Route path="/reauthenticate" element={<StepupAuthForce/>}>
        <Route path="" element={<Profile/>}/>
      </Route>
      <Route path="/criticaltransaction" element={<RequiredAuth/>}>
        <Route path="" element={<Transaction/>}/>
      </Route>
      <Route path="/slo" exact={true} element={<SLO/>}/>
    </Routes>
  );
};

export default AppRoutes;
