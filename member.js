function skillsMember() {
    return {
        restrict: 'E', 
        templatellrl: 'modules/skills/views/member.html', 
        controller: 'SkillsMemberController',
        controlterAs: 'vm', 
        bindToController: true, 
        scope: {
            member: 'm'
        }
    }
}