function stages_data() {
	return {
		"levels": {
			"L_TRADITIONAL": {
				"name": "Traditional done well",
				"min": -1,
				"max": 5,
				"color": "#e0e0ff"
			},
			"L_CORE": {
				"name": "Core modern engineering",
				"min": 6,
				"max": 11,
				"color": "#ffe0d0"
			},
			"L_LEVERAGE": {
				"name": "Leverage new capabilities",
				"min": 12,
				"max": 13,
				"color": "#ffe0ff"
			},
			"L_NO_DEBT": {
				"name": "Eliminate debt and change the rules",
				"min": 14,
				"max": 16,
				"color": "#e0ffe0"
			},
			"L_AWESOME": {
				"name": "Take advantage of being awesome",
				"min": 17,
				"max": 22,
				"color": "#ffffc0"
			}
		},
		"components": {
			"V_CHECK_WORK": {
				"name": "Check your work (TDD, Exploratory Testing)",
				"color": "cornflowerblue"
			},
			"V_CODE": {
				"name": "Write good code (Refactoring)",
				"color": "limegreen"
			},
			"V_SHIP": {
				"name": "Ship (Continuous Integration, Continuous Deployment, Dev Ops)",
				"color": "#A825D3"
			},
			"V_REQUIREMENTS": {
				"name": "Know what to build (Stories, Vertical Decomposition, Planning)",
				"color": "orange"
			},
			"V_LEARN": {
				"name": "Discipline and learning (Pairing, Mobbing)",
				"color": "fuchsia"
			},
			"V_IMPROVE": {
				"name": "Improve as a Team (Teams, Retrospectives)",
				"color": "#cf4040"
			},
			"V_SUSTAINABLE": {
				"name": "Not hurried (Velocity, Planning to Capacity)",
				"color": "#bc8f8f"
			}
		},
		"dependency_kinds": {
			"IS_REQUIRED": {
				"name": "required",
				"description": "Doing A is nearly required to do B",
				"dash_style": []
			},
			"IS_HELPFUL": {
				"name": "helpful",
				"description": "Doing A helps a lot when doing B",
				"dash_style": [
					8
				]
			}
		},
		"skills": {
			"SK_HELP_AD_HOC": {
				"name": "Ad-hoc helping",
				"x": 0,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_COWBOY": {
				"name": "Cowboy coding",
				"x": 0,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [],
				"description": "bq>. Programmer acting alone, without consulting or informing anyone else of their actions.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_QA": {
				"name": "Quality Assurance",
				"x": 0,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STASIS": {
				"name": "Stasis",
				"x": 0,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"description": "No improvement. May actually be regression, as \"capability decays over time\":http://web.mit.edu/nelsonr/www/Repenning%3DSterman_CMR_su01_.pdf.\n\nbq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_MANUAL_PACKAGE": {
				"name": "Manual build and package",
				"x": 0,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_BUILD_FOR_ME": {
				"name": "Build for myself",
				"x": 0,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DEATH_MARCH": {
				"name": "Death marches",
				"x": 0,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEAMS": {
				"name": "Single-assignment teams",
				"x": 1,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"description": "bq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nModern software development is done by teams, not by groups of individuals. A well-functioning team is more flexible and has more capacity than the sum of the individuals who make it up.\n\nThe critical elements are:\n\n\n* **Single assignment:** each individual is assigned to exactly one team at a time. No one is assigned to multiple teams; no one works as a loner (without a team).\n* **Cross-functional:** the team contains all skills, disciplines, or other specialties that are needed to deliver customer value to the marketplace. It can take an idea from concept to cash. Most such efforts do not require coordinating with other teams (or individuals).\n* **8 people:** 6-10 are OK. Numbers larger than this break trust formation (exceeds human family-scale trust boundary). Smaller numbers make it hard to cross-train (not enough heterogeneity).\n\nThere are 2 known-good techniques for forming these teams. Other approaches may work, but these are the ones that have been tested in hundreds of industries.\n\nDurable teams. Add:\n\n* **Person-centric identity:** the team is a set of people that takes on work / projects. Identity is defined by the set of people on the team. It likely has a name like \"team Bluefish\" not like \"the Security team\" (a definition based on technical component) or \"the Pay by card project team\" (team identity based on project.\n* **Durable:** when a project finishes, the same team takes on a new project--which may be entirely unrelated. Team membership does not change very often; the team should commonly go years between any changes of members.\n\nRotational teams. Add:\n\n* **Part of a 100-person team:** use this when you want people to associate to the 100-person group and are willing to lose some capacity in order to gain uniformity / consistency. The larger team should not exceed about 150 people, or tribe-scale identity will not form.\n* **Constant rotation:** all teams should constantly be forming and dissolving. Rotate in 2-3 people per week, or create teams for 2-10 weeks out of a larger pool.\n* **Strong culture of fun:** the whole point of this model is to enable tribe identity. So make sure that the tribe plays together--successful teams with the rotational model play together as part of work.\n\nh2. How it helps\n\nThe team collaborates and reinforces each other.\n\n* The team can make a decision and then everyone helps everyone else hold to it.\n* The team can share skills.\n* The team members help each other and maximize overall throughput, rather than attempting to maximize their individual efficiency.\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEAM_LEADS": {
				"name": "Team leads",
				"x": 1,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_BDUF": {
				"name": "Big design up front",
				"x": 1,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_COWBOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DEV_CHECK": {
				"name": "Developer Checking",
				"x": 1,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_QA",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CENTRAL_PROCESS": {
				"name": "Centralized improvement",
				"x": 1,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_STASIS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_PACKAGE": {
				"name": "Automated package",
				"x": 1,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_MANUAL_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_REQUIREMENTS": {
				"name": "Product requirements",
				"x": 1,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_BUILD_FOR_ME",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_WATERFALL_MILESTONES": {
				"name": "Waterfall milestones",
				"x": 1,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_DEATH_MARCH",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SIT_TOGETHER": {
				"name": "Sit together",
				"x": 2,
				"y": 1,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CODE_REVIEW": {
				"name": "Code review",
				"x": 2,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_FORMAL_TRAINING": {
				"name": "Formal training",
				"x": 2,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DESIGN_PATTERNS": {
				"name": "Pattern-oriented design",
				"x": 2,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_BDUF",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_POST_MORTEM": {
				"name": "Post-mortems",
				"x": 2,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_CENTRAL_PROCESS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SLACK": {
				"name": "Build slack in",
				"x": 2,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_OCCASIONAL": {
				"name": "Pairing to solve hard problems",
				"x": 3,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CODE_PREVIEW": {
				"name": "Code preview",
				"x": 3,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_B_ARCHI_UF": {
				"name": "Just architecture up front",
				"x": 3,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SMALL_SPECS": {
				"name": "Small specs",
				"x": 3,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REQUIREMENTS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PREDICTIVE_WITH_SMELLS": {
				"name": "Smell-based predictive design",
				"x": 4,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_B_ARCHI_UF",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ITERATED_PREDICTIVE": {
				"name": "Iterated predictive design",
				"x": 5,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_PREDICTIVE_WITH_SMELLS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RETROS": {
				"name": "Retrospectives",
				"x": 6,
				"y": 0,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SHARED_CODE": {
				"name": "Shared code responsibility",
				"x": 6,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_REGULARLY": {
				"name": "Pairing to learn",
				"x": 6,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LOCAL_REFACTORING": {
				"name": "Local refactoring",
				"x": 6,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_DEV_TEST": {
				"name": "Automated developer testing",
				"x": 6,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_DEV_CHECK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "When developers becomes responsible for the quality of their own work, it makes sense that they would want to use their programming skills to eliminate tedious repetitive manual testing.\n\nbq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TRACK_CAPACITY": {
				"name": "Track capacity",
				"x": 6,
				"y": 10,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ITERATION": {
				"name": "Iterations with self",
				"x": 6,
				"y": 11,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_WATERFALL_MILESTONES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ACTION_RETROS": {
				"name": "Action-based retrospectives",
				"x": 7,
				"y": 0,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_T_SHAPED": {
				"name": "T-shaped people",
				"x": 7,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DRY": {
				"name": "Don't repeat yourself",
				"x": 7,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. Each piece of knowledge should be expressed in exactly one place. \n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\n* \"DRY in Pragmatic Programmer (book)\":http://pragmatictips.com/11\n\n",
				"help_needed": "Needs description"
			},
			"SK_DONE_DEFINITION": {
				"name": "Done Definition",
				"x": 7,
				"y": 5,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_BUILD_VERIFY": {
				"name": "Automated build verification",
				"x": 7,
				"y": 7,
				"level": "L_CORE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"name": "Collective ownership",
				"x": 8,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_T_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_PRODUCTION": {
				"name": "Pairing for productivity",
				"x": 9,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_WRITE_UNITS": {
				"name": "Code in units",
				"x": 9,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_FIRST": {
				"name": "Test first",
				"x": 9,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_ALWAYS": {
				"name": "Pairing for discipline",
				"x": 10,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STORIES": {
				"name": "Stories",
				"x": 10,
				"y": 8,
				"level": "L_CORE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_REFLECTIVE_DESIGN": {
				"name": "Reflective design",
				"x": 11,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DRY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_UNITS": {
				"name": "Test units",
				"x": 11,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WRITE_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_VS_PROVE": {
				"name": "Learning / Proving Distinction",
				"x": 12,
				"y": 5,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_DONE_DEFINITION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_DEPLOY": {
				"name": "Automated deploy",
				"x": 12,
				"y": 7,
				"level": "L_LEVERAGE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STORY_CLUSTERING": {
				"name": "Story clustering",
				"x": 12,
				"y": 8,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ADAPTIVE_PLANNING": {
				"name": "Adaptive planning",
				"x": 12,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RELATIVE_ESTIMATES": {
				"name": "Relative based estimation",
				"x": 12,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"name": "Limit work to estimated capacity",
				"x": 12,
				"y": 11,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PULL": {
				"name": "Pull systems",
				"x": 12,
				"y": 12,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SESSION_MANUAL_TESTING": {
				"name": "Session-based manual testing",
				"x": 13,
				"y": 3,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_VS_PROVE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"name": "Rolling-wave planning",
				"x": 13,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LIMIT_WORK_CONTINUOUS": {
				"name": "WIP limits",
				"x": 13,
				"y": 11,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_LOCALLY": {
				"name": "Learn from local cmm'ty",
				"x": 14,
				"y": 0,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_IMPROVING_PROOF": {
				"name": "Improving levels of proof",
				"x": 14,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SESSION_MANUAL_TESTING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_LEGACY": {
				"name": "Legacy code under test",
				"x": 14,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RGR": {
				"name": "Red, green, refactor",
				"x": 14,
				"y": 5,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"name": "Automated deploy verification",
				"x": 14,
				"y": 6,
				"level": "L_NO_DEBT",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_VERIFY_EXAMPLES": {
				"name": "Verify examples",
				"x": 14,
				"y": 7,
				"level": "L_NO_DEBT",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_ALL": {
				"name": "Learn from everyone",
				"x": 15,
				"y": 0,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PROCESS_EXPERIMENTS": {
				"name": "Process experiments",
				"x": 15,
				"y": 1,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_FIX_LEGACY": {
				"name": "Legacy code recovery",
				"x": 15,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TEST_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_IMPROVING_PROOF",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SIMUL_PHASES": {
				"name": "Simultaneous Phases",
				"x": 15,
				"y": 9,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_GREENFIELD": {
				"name": "Greenfield project",
				"x": 16,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"name": "Use data to determine capacity",
				"x": 16,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_RELATIVE_ESTIMATES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_MOBS": {
				"name": "Mobbing",
				"x": 17,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_M_SHAPED": {
				"name": "M-shaped people",
				"x": 17,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_EVO_DESIGN": {
				"name": "Evolutionary Design",
				"x": 17,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_FIX_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_GREENFIELD",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_FEATURE_ISOLATION": {
				"name": "Feature isolation",
				"x": 17,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_ROLLBACK": {
				"name": "Automated rollback",
				"x": 17,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_HYPOTHESIS_STORIES": {
				"name": "Hypothesis stories",
				"x": 17,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_EXPERIENCE_FOCUS": {
				"name": "Experience focus",
				"x": 17,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_PLAN": {
				"name": "Effective pull system",
				"x": 17,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"name": "Full-product specialization",
				"x": 18,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_MOBS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_NO_BUGS": {
				"name": "No bugs",
				"x": 18,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_MOBS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TELL_VS_ASK": {
				"name": "Tell / ask distinction",
				"x": 18,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"name": "Whole team business innovation",
				"x": 18,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_YAGNI": {
				"name": "YAGNI and simplest thing",
				"x": 19,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TIP": {
				"name": "Testing in production",
				"x": 19,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_HYPOTHESIS_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SINGLE_PIECE_FLOW": {
				"name": "Single piece flow",
				"x": 19,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_CONT_PLAN",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PROCESS_INNOVATION": {
				"name": "Useful process innovation",
				"x": 20,
				"y": 0,
				"level": "L_AWESOME",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_PROCESS_EXPERIMENTS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_ALL",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RADICAL_COLLABORATE": {
				"name": "Radical collaboration",
				"x": 20,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SINGLE_PIECE_FLOW",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TDDESIGN": {
				"name": "Test-driven design",
				"x": 20,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TELL_VS_ASK",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_SHIP": {
				"name": "Continuous delivery",
				"x": 20,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FEATURE_ISOLATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_METRICS_FOCUS": {
				"name": "Business metric focus",
				"x": 20,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LISTEN_TO_CODE": {
				"name": "Code whispering",
				"x": 21,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_YAGNI",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TDDESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_DEPLOY": {
				"name": "Continuous deployment",
				"x": 21,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_CONT_SHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_ROLLBACK",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEAN_STARTUP": {
				"name": "Lean startup",
				"x": 21,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_METRICS_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WHOLE_TEAM_BUSINESS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			}
		}
	};
}
