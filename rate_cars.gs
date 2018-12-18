package util.ActivityWrapper

uses util.ActivityWrapper.Events.EventBase
uses util.assignment.GroupFinderService

class rate_cars extends AbstractActivityRGS {

  override function initActivity(event: EventBase) {
    wrappedActivity.IncidentRgs = event.Incident
  }

  override function onGlobalAssignment(): Boolean {
    var group = GroupFinderService.findGroup23()
    var user = User.finder.findUserByUserName("usver")
    return wrappedActivity.assign(group, user)
  }
}
