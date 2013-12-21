function stages_data() {
	return {
		"levels": {
			"L_TRADITIONAL": {
				"name": "Traditional done well",
				"min": -1,
				"max": 4,
				"color": "#e0e0ff"
			},
			"L_CORE": {
				"name": "Core modern engineering",
				"min": 5,
				"max": 10,
				"color": "#ffe0d0"
			},
			"L_LEVERAGE": {
				"name": "Leverage new capabilities",
				"min": 11,
				"max": 13,
				"color": "#ffe0ff"
			},
			"L_NO_DEBT": {
				"name": "Eliminate debt and change the rules",
				"min": 14,
				"max": 18,
				"color": "#e0ffe0"
			},
			"L_AWESOME": {
				"name": "Take advantage of being awesome",
				"min": 19,
				"max": 33,
				"color": "#ffffc0"
			}
		},
		"components": {
			"V_CHECK_WORK": {
				"name": "Check your work",
				"color": "cornflowerblue"
			},
			"V_CODE": {
				"name": "Write good code",
				"color": "limegreen"
			},
			"V_SHIP": {
				"name": "Ship",
				"color": "mediumpurple"
			},
			"V_REQUIREMENTS": {
				"name": "Know what to build",
				"color": "orange"
			},
			"V_LEARN": {
				"name": "Discipline and learning",
				"color": "fuchsia"
			},
			"V_IMPROVE": {
				"name": "Improve as a Team",
				"color": "darkred"
			},
			"V_SUSTAINABLE": {
				"name": "Not hurried",
				"color": "rosybrown"
			}
		},
		"dependency_kinds": {
			"IS_REQUIRED": {
				"name": "Doing A is nearly required to do B",
				"dash_style": []
			},
			"IS_HELPFUL": {
				"name": "Doing A helps a lot when doing B",
				"dash_style": [
					8
				]
			}
		},
		"skills": {
			"SK_QA": {
				"name": "Quality Assurance",
				"x": 0,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": []
			},
			"SK_DEV_CHECK": {
				"name": "Developer Checking",
				"x": 1,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_QA",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_AUTO_DEV_TEST": {
				"name": "Automated developer testing",
				"x": 2,
				"y": 0,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_DEV_CHECK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_TEST_FIRST": {
				"name": "Test first",
				"x": 3,
				"y": 0,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_VERIFY_EXAMPLES",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_TEST_UNITS": {
				"name": "Test units",
				"x": 3,
				"y": 1,
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
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_WRITE_UNITS": {
				"name": "Code in units",
				"x": 2,
				"y": 2,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_RGR": {
				"name": "Red, green, refactor",
				"x": 4,
				"y": 0,
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
					}
				]
			},
			"SK_TEST_LEGACY": {
				"name": "Legacy code under test",
				"x": 4,
				"y": 2,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_TDDESIGN": {
				"name": "Test-driven design",
				"x": 5,
				"y": 0,
				"level": "L_AWESOME",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_FIX_LEGACY": {
				"name": "Legacy code recovery",
				"x": 5,
				"y": 2,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TEST_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_LISTEN_TO_CODE": {
				"name": "Code whispering",
				"x": 18,
				"y": 0,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_YAGNI",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_SIMUL_PHASES": {
				"name": "Simultaneous Phases",
				"x": 6,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_FIX_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SINGLE_PIECE_FLOW",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_EVO_DESIGN": {
				"name": "Evolutionary Design",
				"x": 6,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TDDESIGN",
						"kind": "IS_REQUIRED"
					},
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
				]
			},
			"SK_NO_BUGS": {
				"name": "No bugs",
				"x": 7,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_CONT_SHIP",
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
				]
			},
			"SK_YAGNI": {
				"name": "YAGNI and simplest thing",
				"x": 8,
				"y": 2,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_CONT_SHIP": {
				"name": "Continuous delivery",
				"x": 13,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_FEATURE_ISOLATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_CONT_DEPLOY": {
				"name": "Continuous deployment",
				"x": 19,
				"y": 3,
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
				]
			},
			"SK_GREENFIELD": {
				"name": "Greenfield project",
				"x": 5,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": []
			},
			"SK_COWBOY": {
				"name": "Cowboy coding",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": []
			},
			"SK_BDUF": {
				"name": "Big design up front",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_COWBOY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_DESIGN_PATTERNS": {
				"name": "Pattern-oriented design",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_BDUF",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_DRY": {
				"name": "Don't repeat yourself",
				"x": 7,
				"y": 5,
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
					}
				]
			},
			"SK_B_ARCHI_UF": {
				"name": "Just architecture up front",
				"x": 2,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PREDICTIVE_WITH_SMELLS": {
				"name": "Smell-based predictive design",
				"x": 3,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_B_ARCHI_UF",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_ITERATED_PREDICTIVE": {
				"name": "Iterated predictive design",
				"x": 4,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_PREDICTIVE_WITH_SMELLS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_LOCAL_REFACTORING": {
				"name": "Local refactoring",
				"x": 1,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": []
			},
			"SK_REFLECTIVE_DESIGN": {
				"name": "Reflective design",
				"x": 6,
				"y": 5,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DRY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_MANUAL_PACKAGE": {
				"name": "Manual build and package",
				"x": 0,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": []
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
				]
			},
			"SK_AUTO_BUILD_VERIFY": {
				"name": "Automated build verification",
				"x": 5,
				"y": 8,
				"level": "L_CORE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_AUTO_DEPLOY": {
				"name": "Automated deploy",
				"x": 18,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_FEATURE_ISOLATION": {
				"name": "Feature isolation",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"name": "Automated deploy verification",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_AUTO_ROLLBACK": {
				"name": "Automated rollback",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY_VERIFY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_BUILD_FOR_ME": {
				"name": "Build for myself",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": []
			},
			"SK_REQUIREMENTS": {
				"name": "Product requirements",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_BUILD_FOR_ME",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_SLACK": {
				"name": "Build slack in",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_REQUIREMENTS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_SMALL_SPECS": {
				"name": "Small specs",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_STORIES": {
				"name": "Stories",
				"x": 18,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_VERIFY_EXAMPLES": {
				"name": "Verify examples",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_STORY_CLUSTERING": {
				"name": "Story clustering",
				"x": 18,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_ADAPTIVE_PLANNING": {
				"name": "Adaptive planning",
				"x": 18,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					}
				]
			},
			"SK_HYPOTHESIS_STORIES": {
				"name": "Hypothesis stories",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"name": "Rolling-wave planning",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_EXPERIENCE_FOCUS": {
				"name": "Experience focus",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_METRICS_FOCUS": {
				"name": "Business metric focus",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_LEAN_STARTUP": {
				"name": "Lean startup",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"name": "Whole team business innovation",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_HELP_AD_HOC": {
				"name": "Ad-hoc helping",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": []
			},
			"SK_TEAM_LEADS": {
				"name": "Team leads",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_FORMAL_TRAINING": {
				"name": "Formal training",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_CODE_REVIEW": {
				"name": "Code review",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_FORMAL_TRAINING",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_CODE_PREVIEW": {
				"name": "Code preview",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_SHARED_CODE": {
				"name": "Shared code responsibility",
				"x": 18,
				"y": 10,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_T_SHAPED": {
				"name": "T-shaped people",
				"x": 18,
				"y": 10,
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
					}
				]
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"name": "Collective ownership",
				"x": 18,
				"y": 10,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_T_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				]
			},
			"SK_SIT_TOGETHER": {
				"name": "Sit together",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_LEARN",
				"requires": []
			},
			"SK_PAIR_OCCASIONAL": {
				"name": "Pairing to solve hard problems",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PAIR_REGULARLY": {
				"name": "Pairing to learn",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_LEARN",
				"requires": []
			},
			"SK_PAIR_PRODUCTION": {
				"name": "Pairing for productivity",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PAIR_ALWAYS": {
				"name": "Pairing for discipline",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_M_SHAPED": {
				"name": "M-shaped people",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_MOBS": {
				"name": "Mobbing",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				]
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"name": "Full-product specialization",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_STASIS": {
				"name": "Stasis",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": []
			},
			"SK_CENTRAL_PROCESS": {
				"name": "Centralized improvement",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_STASIS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_POST_MORTEM": {
				"name": "Post-mortems",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_CENTRAL_PROCESS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_RETROS": {
				"name": "Retrospectives",
				"x": 18,
				"y": 10,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_POST_MORTEM",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_ACTION_RETROS": {
				"name": "Action-based retrospectives",
				"x": 18,
				"y": 10,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_RETROS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_LEARN_LOCALLY": {
				"name": "Learn from local cmm'ty",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PROCESS_EXPERIMENTS": {
				"name": "Process experiments",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_LEARN_ALL": {
				"name": "Learn from everyone",
				"x": 18,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PROCESS_INNOVATION": {
				"name": "Useful innovation",
				"x": 18,
				"y": 10,
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
				]
			},
			"SK_RADICAL_COLLABORATE": {
				"name": "Radical collaboration",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SINGLE_PIECE_FLOW",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_DEATH_MARCH": {
				"name": "Death marches",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": []
			},
			"SK_TRACK_CAPACITY": {
				"name": "Track capacity",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": []
			},
			"SK_WATERFALL_MILESTONES": {
				"name": "Waterfall milestones",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_DEATH_MARCH",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_ITERATION": {
				"name": "Iterations with self",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_WATERFALL_MILESTONES",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_RELATIVE_ESTIMATES": {
				"name": "Relative based estimation",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"name": "Limit work to estimated capacity",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"name": "Use data to determine capacity",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_RELATIVE_ESTIMATES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_PULL": {
				"name": "Pull systems",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_DATA_DRIVEN_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_LIMIT_WORK_CONTINUOUS": {
				"name": "WIP limits",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_SINGLE_PIECE_FLOW": {
				"name": "Single piece flow",
				"x": 18,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_LIMIT_WORK_CONTINUOUS",
						"kind": "IS_REQUIRED"
					}
				]
			},
			"SK_TIP": {
				"name": "Testing in production",
				"x": 18,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_HYPOTHESIS_STORIES",
						"kind": "IS_REQUIRED"
					}
				]
			}
		}
	};
}