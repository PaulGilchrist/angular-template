import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import * as $ from 'jquery';

/* Module Declarations */
import { HelpHomeComponent } from './components/help-home/help-home.component';
import { HelpNavComponent } from './components/help-nav/help-nav.component';
import { TopicClientLibrariesComponent } from './components/topic-clientLibraries/topic-clientLibraries.component';
import { TopicGettingStartedComponent } from './components/topic-gettingStarted/topic-gettingStarted.component';
import { TopicGitBranchingComponent } from './components/topic-gitBranching/topic-gitBranching.component';
import { TopicNpmCommandsComponent } from './components/topic-npmCommands/topic-npmCommands.component';
import { TopicServerLibrariesComponent } from './components/topic-serverLibraries/topic-serverLibraries.component';
import { TopicVsCodeCommandsComponent } from './components/topic-vsCodeCommands/topic-vsCodeCommands.component';
import { TopicVstsDeployComponent } from './components/topic-vstsDeploy/topic-vstsDeploy.component';

@NgModule({
    declarations: [
        HelpHomeComponent,
        HelpNavComponent,
        TopicClientLibrariesComponent,
        TopicGettingStartedComponent,
        TopicGitBranchingComponent,
        TopicNpmCommandsComponent,
        TopicServerLibrariesComponent,
        TopicVsCodeCommandsComponent,
        TopicVstsDeployComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HelpHomeComponent,
                children: [
                    { path: '', component: TopicGettingStartedComponent },
                    { path: 'topic-clientLibraries', component: TopicClientLibrariesComponent },
                    { path: 'topic-gettingStarted', component: TopicGettingStartedComponent	},
                    { path: 'topic-gitBranching', component: TopicGitBranchingComponent	},
                    { path: 'topic-npmCommands', component: TopicNpmCommandsComponent	},
                    { path: 'topic-serverLibraries', component: TopicServerLibrariesComponent },
                    { path: 'topic-vsCodeCommands', component: TopicVsCodeCommandsComponent },
                    { path: 'topic-vstsDeploy', component: TopicVstsDeployComponent }
                ]
            }
        ])
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

})
export class HelpModule {}
