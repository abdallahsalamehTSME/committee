import { reactive } from "vue";

interface AppState {
  committeeDefinition: {
    Type: string;
    CommitteeChairmanId: number;
    CommitteeScope: string;
    CommitteeClassification: string;
    CommitteeIssuanceOfFormationDecision:string;
    CommitteeIssuedBy:string;
    CommitteeDateOfIssuance:Date|null;
    CommitteeStageOfDevelopmentOfWorkTeams:string;
    CommitteeTeamType:string;
    CommitteeStartDateOfTheWorkOfTheTeam:Date|null;
    CommitteeEndDateOfTheWorkOfTheTeam:Date|null;
  };
  committeeMembers: object;
  CommitteeKpis: object;
  committeeInitiatives: object;
}

const state: AppState = reactive({
  committeeDefinition: {
    Type: "",
    CommitteeChairmanId: 1,
    CommitteeScope: "",
    CommitteeClassification: "",
    CommitteeIssuanceOfFormationDecision:"",
    CommitteeIssuedBy:"",
    CommitteeDateOfIssuance:null,
    CommitteeStageOfDevelopmentOfWorkTeams:"",
    CommitteeTeamType:"",
    CommitteeStartDateOfTheWorkOfTheTeam:null,
    CommitteeEndDateOfTheWorkOfTheTeam:null,
  },
  committeeMembers: {},
  CommitteeKpis: {},
  committeeInitiatives: {},
});

// Expose methods to update the state , methods will be here 👇

//committeeDefinition methods 👇

//committeeMembers methods 👇

//CommitteeKpis methods 👇

//committeeInitiatives methods 👇

// Export the state and methods
export { state };
