API SPECIFICATION

0. TERM:
group object: Object whose format like: {groupid: "new group id", groupname: "new group name", settings: [ {key1:value1}, {key2:value2}... ]}
All return in JSON format and within field 'data'.


1. CREATE GROUP
Create a new empty group.

URL: /g/new/
VERB: POST
DATA: groupname
RETURN: 
	Success: group object
	Faile: null


2. DELETE GROUP
Delete a existing group.

URL: /g/del/
VERB: POST
DATA: groupid
RETURN: 
	Success: true
	Fail: false


3. UPDATE GROUP
Update group field, currently only group name.

URL: /g/upd/
VERB: POST
DATA: groupobject
RETURN: 
	Success: updated group object
	Fail: false


4. RETRIEVE GROUP(s) INFO
Get specific id group or whole list of group info

URL: /g/ret/
VERB: POST
DATA: groupid
RETURN:
	Success: Array of group object(s), if groupid specified, return array with single group object, otherwise( groupid==null or undefined) return all group objects
	Fail: null


