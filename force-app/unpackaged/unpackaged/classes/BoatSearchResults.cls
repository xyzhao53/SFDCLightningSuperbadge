public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId != ''){
        	return ([SELECT Id, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c =: boatTypeId]);
        }else{
            return ([SELECT Id, Contact__r.Name, Picture__c FROM Boat__c]);
       }
    }
}