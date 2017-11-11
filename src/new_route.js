import "babel-polyfill"; // Add Promises polyfill to global environment

//Import local css
import "react-widgets/lib/less/react-widgets.less";
import "css/tour.scss";
//import 'react-joyride/lib/react-joyride.scss';
import "css/style.less";

import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  Switch,
  IndexRedirect,
  Redirect
} from "react-router-dom";

import App from "containers/App";
import AppWrapper from "containers/AppWrapper";
import LandingPage from "routes/LandingPage";
import PricingPage from "routes/PricingPage";
import QualityPage from "routes/QualityPage";
import Home from "routes/Home";
import SignInPage from "routes/SignInPage";
import SignUpPage from "routes/SignUpPage";
import PasswordResetPage from "containers/PasswordResetPage";
import PasswordResetConfirmPage from "containers/PasswordResetConfirmPage";
import Agreement from "routes/Agreement";
import PrivacyPolicy from "routes/PrivacyPolicy";
import CodeOfConduct from "routes/CodeOfConduct";
import SettingsPage from "containers/SettingsPage";
import ProjectBoard from "components/ProjectBoard";
import ProjectTaskForm from "components/ProjectTaskForm";
import TaskContainer from "containers/TaskContainer";
import TaskList from "components/TaskList";
import TaskForm from "components/TaskForm";
import EditTaskSectionForm from "components/EditTaskSectionForm";
import TaskDetailPage from "routes/TaskDetailPage";
import ApplicationForm from "components/ApplicationForm";
import TaskWorkflow from "components/TaskWorkflow";
import ApplicationList from "components/ApplicationList";
import ApplicationDetail from "components/ApplicationDetail";
import MilestoneContainer from "containers/MilestoneContainer";
import Milestone from "components/Milestone";
import MilestoneList from "components/MilestoneList";
import IntegrationList from "components/IntegrationList";
import TaskPay from "components/TaskPay";
import Participation from "components/Participation";
import RateDevelopers from "components/RateDevelopers";
import UserPage from "routes/UserPage";
import UserList from "components/UserList";
import User from "components/User";
import InviteDeveloper from "containers/InviteDeveloper";
import MessagePage from "routes/MessagePage";
import ChannelContainer from "containers/ChannelContainer";
import ChannelForm from "components/ChannelForm";
import ChatBox from "components/ChatBox";
import MessageList from "components/MessageList";
import ProfilePage from "routes/ProfilePage";
import Profile from "components/Profile";
import Stack from "components/Stack";
import CompanyProfile from "components/CompanyProfile";
import PaymentMethod from "components/PaymentMethod";
import Account from "components/Account";
import IDDocument from "components/IDDocument";
import ProfilePicture from "components/ProfilePicture";
import PasswordChangeForm from "components/PasswordChangeForm";
import ProfileType from "components/ProfileType";
import PaymentList from "components/PaymentList";
import SupportPage from "routes/SupportPage";
import SupportSectionList from "components/SupportSectionList";
import SupportPageDetail from "components/SupportPageDetail";
import SearchPage from "routes/SearchPage";
import SupportPageList from "components/SupportPageList";
import EstimateContainer from "containers/EstimateContainer";
import EstimateDetailContainer from "containers/EstimateDetailContainer";
import EstimateForm from "components/EstimateForm";
import EstimateDetail from "components/EstimateDetail";
import EstimateList from "components/EstimateList";
import QuoteContainer from "containers/QuoteContainer";
import QuoteDetailContainer from "containers/QuoteDetailContainer";
import QuoteForm from "components/QuoteForm";
import QuoteDetail from "components/QuoteDetail";
import TaskWizard from "routes/TaskWizard";
import StoryPage from "routes/StoryPage";
import TaskWizardLander from "routes/TaskWizardLander";
import MultiTaskPaymentContainer from "containers/MultiTaskPaymentContainer";
import MultiTaskPaymentDetailContainer from "containers/MultiTaskPaymentDetailContainer";
import MultiTaskPay from "components/MultiTaskPay";
import MultiTaskPayProcessing from "components/MultiTaskPayProcessing";
import QuizForm from "components/QuizForm";
import DeveloperProfile from "components/DeveloperProfile";

const authRoutes = [
  { path: "home", component: Home },
  {
    parent: ProfilePage,
    children: [
      { path: "profile", exact: true, to: "profile/personal" },
      { path: "profile/personal", component: Profile },
      { path: "profile/stack", component: Stack },
      { path: "profile/company", component: CompanyProfile },
      { path: "profile/payment", exact: true, component: PaymentMethod },
      { path: "profile/payment/:provider", component: PaymentMethod },
      { path: "profile/account", component: Account },
      { path: "profile/id-document", component: IDDocument },
      { path: "profile/photo", component: ProfilePicture },
      { path: "profile/security", component: PasswordChangeForm },
      { path: "profile/complete", component: ProfileType },
      { path: "profile/*", to: "profile/personal" }
    ]
  },
  {
    parent: EstimateContainer,
    children: [
      { path: "proposal", exact: true, component: EstimateList },
      { path: "proposal/new", component: EstimateForm },
      { path: "proposal/filter/:filter", component: EstimateList },
      {
        parent: EstimateDetailContainer,
        children: [
          {
            path: "proposal/:estimateId",
            exact: true,
            component: EstimateDetail
          },
          { path: "proposal/edit", component: EstimateForm }
        ]
      }
    ]
  },
  { path: "estimate*", to: "proposal*" },
  { path: "settings*", component: SettingsPage },
  {
    parent: TaskContainer,
    path: "work",
    children: [
      { path: "", exact: true, component: TaskList },
      { path: "new", component: TaskForm },
      { path: "filter/:filter", component: TaskList },
      { path: "skill/:skill(/:filter)", component: TaskList },
      {
        parent: TaskDetailPage,
        path: ":taskId",
        children: [
          { path: "", exact: true, component: TaskWorkflow },
          { path: "edit", exact: true, component: TaskForm },
          {
            path: "edit/:editSection",
            component: EditTaskSectionForm
          },
          { path: "edit/participation", component: TaskForm },
          { path: "edit/payment-approval", component: TaskForm },
          { path: "edit/*", component: TaskForm },
          { path: "apply", component: ApplicationForm },
          {
            parent: EstimateContainer,
            path: "proposal",
            children: [
              {
                path: "",
                exact: true,
                to: "new"
              },
              { path: "new", component: EstimateForm },
              {
                parent: EstimateDetailContainer,
                children: [
                  {
                    path: ":estimateId",
                    exact: true,
                    component: EstimateDetail
                  },
                  {
                    path: "edit",
                    component: EstimateForm
                  }
                ]
              }
            ]
          },
          { path: "estimate*", to: "proposal*" },
          {
            parent: QuoteContainer,
            path: "planning",
            children: [
              { path: "", exact: true, to: "new" },
              { path: "new", component: QuoteForm },
              {
                parent: QuoteDetailContainer,
                path: ":quoteId",
                children: [
                  { path: "", exact: true, component: QuoteDetail },
                  { path: "edit", component: QuoteForm }
                ]
              }
            ]
          },
          { path: "applications", exact: true, component: ApplicationList },
          { path: "applications/:applicationId", component: ApplicationDetail },
          { path: "board", component: ProjectBoard },
          { path: "task/new", exact: true, component: ProjectTaskForm },
          { path: "task/new/*", component: ProjectTaskForm },
          { path: "integrations/trello", component: TaskForm },
          { path: "integrations/google", component: TaskForm },
          { path: "integrations/:provider", component: IntegrationList },
          { path: "integrations", exact: true, to: "integrations/github" },
          { path: "invoice", component: TaskPay },
          { path: "participation", component: Participation },
          { path: "rate", component: RateDevelopers },
          {
            path: "event",
            parent: MilestoneContainer,
            children: [{ path: ":eventId", component: Milestone }]
          },
          { path: "*", component: TaskForm },
          { path: "task*", to: "work*" },
          {
            path: "conversation",
            parent: MessagePage,
            children: [
              { path: "", exact: true, to: "start" },
              { path: "start/:recipientId", component: ChannelForm },
              { path: "start/task/:taskId", component: ChannelForm },
              {
                path: ":channelId",
                parent: ChannelContainer,
                children: [
                  { path: "", exact: true, to: "messages" },
                  { path: "edit", component: ChannelForm },
                  { path: ":channelView", component: ChatBox }
                ]
              }
            ]
          },
          { path: "channel*", to: "conversation*" },
          { path: "message*", to: "channel" },
          {
            path: "payments",
            parent: TaskContainer,
            children: [
              { path: "", exact: true, component: PaymentList },
              { path: "filter/:filter", component: PaymentList },
              {
                path: "bulk",
                parent: MultiTaskPaymentContainer,
                children: [
                  {
                    path: ":batchId",
                    parent: MultiTaskPaymentDetailContainer,
                    children: [
                      { path: "", exact: true, component: MultiTaskPay },
                      { path: "processing", component: MultiTaskPayProcessing }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "help",
            parent: MessagePage,
            children: [
              {
                path: ":channelId",
                parent: ChannelContainer,
                children: [{ path: "", exact: true, component: ChatBox }]
              }
            ]
          },
          {
            path: "dashboard/updates",
            parent: MilestoneContainer,
            children: [
              { path: "", exact: true, children: MilestoneList },
              { path: "filter/:filter", component: MilestoneList }
            ]
          }
        ]
      }
    ]
  }
];

const regularRoutes = [
  {
    path: "people",
    parent: UserPage,
    children: [
      { path: "", exact: true, redirect: "filter/developers" },
      { path: "filter/:filter", component: UserList },
      { path: "skill/:skill(/:filter)", component: UserList },
      { path: "invite", component: InviteDeveloper },
      { path: ":userId", component: User }
    ]
  },
  { path: "member*", to: "people*" },
  {
    path: "support",
    parent: SupportPage,
    children: [
      { path: "", exact: true, component: SupportSectionList },
      { path: ":section", exact: true, component: SupportPageList },
      { path: "tag/:tag", exact: true, component: SupportPageList },
      { path: ":page", exact: true, component: SupportPageDetail }
    ]
  },
  {
    path: "search",
    parent: SearchPage,
    children: [
      { path: "", exact: true, to: "people" },
      { path: "people", component: UserList },
      { path: "developers", component: UserList },
      { path: "tasks", component: TaskList },
      { path: "messages", component: MessageList },
      { path: "support", component: SupportPageList }
    ]
  },
  {
    path: "customer/help/:chatId",
    component: LandingPage
  },
  { path: ":skill", component: LandingPage },
  { path: "*", to: "home" }
];
const WrappedComponent = () => {
  render(
    <AppWrapper>
      {authRoutes.map((url2, index) => {
        const Parent = url2.parent;
        if (Parent) {
          return url2.children.map((url, index) => {
            let { component, ...props } = url;
            return component
              ? <Route
                  key={index}
                  {...props}
                  render={({ match }) => {
                    const Component = component;
                    return (
                      <Parent>
                        <Component />
                      </Parent>
                    );
                  }}
                />
              : <Redirect {...props} />;
          });
        }
        if (url2.component) {
          return <Route {...url2} />;
        }
        return <Redirect {...url2} />;
      })}
    </AppWrapper>
  );
};
let all_routes = (
  <Route>
    <Route unauthedOnly={true}>
      <Route path="call" component={LandingPage} showCallWidget={true} />
      {/* End of No Auth Pages */}
    </Route>
    <Route component={AppWrapper} authedOrEmailOnly={true}>
      {/* Auth or Email Only Pages */}
      <Route authedOnly={true}>
        {/* Auth Only Pages */}
        <Route path="home" component={Home} />
        <Route path="work" component={TaskContainer}>
          <IndexRoute component={TaskList} />
          <Route path="new" component={TaskForm} />
          <Route path="filter/:filter" component={TaskList} />
          <Route path="skill/:skill(/:filter)" component={TaskList} />
          <Route path=":taskId" component={TaskDetailPage}>
            <IndexRoute component={TaskWorkflow} />
            <Route path="edit" crumb="Edit">
              <IndexRoute component={TaskForm} />
              {/*<Route path="complete-task" component={EditTaskSectionForm} crumb="Finalize Task"/>*/}
              <Route
                path=":editSection"
                component={EditTaskSectionForm}
                crumbs={{ trello: "Trello", "google-drive": "Google Drive" }}
              />
              <Route
                path="participation"
                component={TaskForm}
                crumb="Participation"
              />
              <Route
                path="payment-approval"
                component={TaskForm}
                crumb="Payment Review"
              />
              <Route path="*" component={TaskForm} />
            </Route>
            <Route path="apply" component={ApplicationForm} crumb="Apply" />
            <Route
              path="proposal"
              component={EstimateContainer}
              crumb="Proposal"
            >
              <IndexRedirect to="new" />
              <Route path="new" component={EstimateForm} />
              <Route path=":estimateId" component={EstimateDetailContainer}>
                <IndexRoute component={EstimateDetail} />
                <Route path="edit" component={EstimateForm} />
              </Route>
            </Route>
            <Redirect path="estimate*" to="proposal*" />
            <Route path="planning" component={QuoteContainer} crumb="Planning">
              <IndexRedirect to="new" />
              <Route path="new" component={QuoteForm} />
              <Route path=":quoteId" component={QuoteDetailContainer}>
                <IndexRoute component={QuoteDetail} />
                <Route path="edit" component={QuoteForm} />
              </Route>
            </Route>
            <Route path="applications">
              <IndexRoute component={ApplicationList} crumb="Applications" />
              <Route path=":applicationId" component={ApplicationDetail} />
            </Route>
            <Route
              path="board"
              component={ProjectBoard}
              crumb="Project Board"
            />
            <Route
              path="task/new"
              component={ProjectTaskForm}
              crumb="Add task"
            />
            <Route
              path="task/new/*"
              component={ProjectTaskForm}
              crumb="Add task"
            />
            <Route path="integrations" crumb="Integrations">
              <IndexRedirect to="github" component={IntegrationList} />
              <Route path="trello" component={TaskForm} crumb="Trello" />
              <Route path="google" component={TaskForm} crumb="Google Drive" />
              <Route
                path=":provider"
                component={IntegrationList}
                crumb="Integrations"
                crumbs={{ slack: "Slack", github: "GitHub" }}
              />
            </Route>
            <Route
              path="invoice"
              component={TaskPay}
              crumb="Generate Invoice"
            />
            <Route path="pay" component={TaskPay} crumb="Make Payment" />
            <Route
              path="participation"
              component={Participation}
              crumb="Participation shares"
            />
            <Route
              path="rate"
              component={RateDevelopers}
              crumb="Rate Developers"
            />
            <Route path="event" component={MilestoneContainer}>
              <Route path=":eventId" component={Milestone} />
            </Route>
          </Route>
          <Route path="*" component={TaskForm} />
        </Route>
        <Redirect path="task*" to="work*" />
        <Route path="conversation" component={MessagePage}>
          <IndexRedirect to="start" />
          <Route path="start" component={ChannelForm}>
            <Route path=":recipientId" />
            <Route path="task/:taskId" />
          </Route>
          <Route path=":channelId" component={ChannelContainer}>
            <IndexRedirect to="messages" />
            <Route path="edit" component={ChannelForm} />
            <Route path=":channelView" component={ChatBox} />
          </Route>
        </Route>
        <Redirect path="message*" to="channel" />
        <Redirect path="channel*" to="conversation*" />
        <Route path="payments" component={TaskContainer}>
          <IndexRoute component={PaymentList} />
          <Route path="filter/:filter" component={PaymentList} />
          <Route path="bulk" component={MultiTaskPaymentContainer}>
            <Route path=":batchId" component={MultiTaskPaymentDetailContainer}>
              <IndexRoute component={MultiTaskPay} />
              <Route path="processing" component={MultiTaskPayProcessing} />
            </Route>
          </Route>
        </Route>
        <Route path="help" component={MessagePage}>
          <Route path=":channelId" component={ChannelContainer}>
            <IndexRoute component={ChatBox} />
          </Route>
        </Route>
        <Route path="dashboard">
          <Route path="updates" component={MilestoneContainer}>
            <IndexRoute component={MilestoneList} />
            <Route path="filter/:filter" component={MilestoneList} />
          </Route>
        </Route>
        {/* End Auth Only Pages */}
      </Route>

      <Route path="people" component={UserPage}>
        <IndexRedirect to="filter/developers" />
        <Route path="filter/:filter" component={UserList} />
        <Route path="skill/:skill(/:filter)" component={UserList} />
        <Route path="invite" component={InviteDeveloper} />
        <Route path=":userId" component={User} />
      </Route>
      <Redirect path="member*" to="people*" />
      <Route path="support" component={SupportPage}>
        <IndexRoute component={SupportSectionList} />
        <Route path=":section">
          <IndexRoute component={SupportPageList} />
          <Route path="tag/:tag" component={SupportPageList} />
          <Route path=":page" component={SupportPageDetail} />
        </Route>
      </Route>
      <Route path="search" component={SearchPage}>
        <IndexRedirect to="people" />
        <Route path="people" component={UserList} />
        <Route path="developers" component={UserList} />
        <Route path="tasks" component={TaskList} authedOnly={true} />
        <Route path="messages" component={MessageList} authedOnly={true} />
        <Route path="support" component={SupportPageList} />
      </Route>
      {/* End Auth Only or Email Pages */}
    </Route>
    <Route
      path="customer/help/:chatId"
      component={LandingPage}
      unauthedOnly={true}
    />
    <Route path=":skill" component={LandingPage} unauthedOnly={true} />
    <Redirect path="*" to="home" />
  </Route>
);
const unauthorized_urls = [
  { path: "welcome", exact: true, component: TaskWizardLander },
  { path: "welcome/:skill", component: TaskWizardLander },
  { path: "quiz", exact: true, component: QuizForm },
  { path: "quiz/*", component: QuizForm },
  { path: "developer/profile", exact: true, component: DeveloperProfile },
  { path: "developer/profile/*", component: DeveloperProfile },
  { path: "start", exact: true, component: TaskWizard },
  { path: "start/:phase/:taskId", exact: true, component: TaskWizard },
  { path: "start/:phase/:taskId/*", component: TaskWizard },
  { path: "start/*", component: TaskWizard },
  { path: "start-welcome", exact: true, component: TaskWizard },
  { path: "start-welcome/:phase/:taskId", exact: true, component: TaskWizard },
  { path: "start-welcome/:phase/:taskId/*", component: TaskWizard },
  { path: "start-welcome/*", component: TaskWizard },
  { path: "start-outsource", exact: true, component: TaskWizard },
  {
    path: "start-outsource/:phase/:taskId",
    exact: true,
    component: TaskWizard
  },
  { path: "start-outsource/:phase/:taskId/*", component: TaskWizard },
  { path: "start-outsource/*", component: TaskWizard },
  // { path: "call",component: Landing },
  { path: "our-story", component: StoryPage },
  { path: "quality", component: QualityPage },
  { path: "pricing", component: PricingPage },
  { path: "press", component: LandingPage },
  { path: "FAQ", component: LandingPage },
  { path: "signin", component: SignInPage },
  { path: "signup", exact: true, to: "signin" },
  { path: "signup/project-owner", component: SignUpPage },
  { path: "signup/invite/:invitationKey", component: SignUpPage },
  { path: "signup/developer/invite/:invitationKey", component: SignUpPage },
  { path: "signup/developer/:confirmationKey", component: SignUpPage },
  { path: "reset-password", exact: true, component: PasswordResetPage },
  {
    path: "reset-password/confirm/:uid/:token",
    component: PasswordResetConfirmPage
  }
];
const TungeRoute = ({ base_route = "" }) => {
  render(
    <Switch>
      <Route
        exact
        path={`${base_route}/`}
        component={LandingPage}
        unauthedOnly={true}
      />
      <Route path={`${base_route}/agreement`} component={Agreement} />
      <Route path={`${base_route}/privacy`} component={PrivacyPolicy} />
      <Route path={`${base_route}/code-of-conduct`} component={CodeOfConduct} />
      {unauthorized_urls.map((url, index) => {
        let props = url;
        if (props.path) {
          props.path = `${base_url}/${url.path}`;
        }
        let Component = Route;
        if (!!url.component === false) {
          Component = Redirect;
        }
        return <Component {...props} />;
      })}
    </Switch>
  );
};

export default ({ history }) => {
  return (
    <Router history={history}>
      <App>
        <TungeRoute base_route="/tunga" />
        <TungeRoute />
      </App>
    </Router>
  );
};
