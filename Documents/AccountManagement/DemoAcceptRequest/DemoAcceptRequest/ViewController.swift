//
//  ViewController.swift
//  DemoAcceptRequest
//
//  Created by Chalam, Naga Rani on 11/29/18.
//  Copyright © 2018 Naga Rani, Chalam. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var labeltxt: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func AcceptRequest(_ sender: Any) {
        labeltxt.text = "Response of accept request"
        
       // makeGetCall()
        //makePostCall()
        acceptHouseholdPostCall()
        //generateOTPPostCall()
        conscentPostCall()
        
        /*
        
        let imageURL = URL(string: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA05982_hires.jpg")
        let task = URLSession.shared.dataTask(with: imageURL{ (data, response, error) in
            if error == nil {
                let loadedImage = UIImage(data: data!)
            }
        }
        
        //Send GET request
     
        */
    }
    
    
    func  makeGetCall() {
        // Set up the URL request
        let todoEndpoint: String = "https://jsonplaceholder.typicode.com/todos/1"
        guard let url = URL(string: todoEndpoint) else {
            print("Error: cannot create URL")
            return
        }
        let urlRequest = URLRequest(url: url)
        
        // set up the session
        let config = URLSessionConfiguration.default
        let session = URLSession(configuration: config)
        
        // make the request
        let task = session.dataTask(with: urlRequest) {
            (data, response, error) in
            // check for any errors
            guard error == nil else {
                print("error calling GET on /todos/1")
                print(error!)
                return
            }
            // make sure we got data
            guard let responseData = data else {
                print("Error: did not receive data")
                return
            }
            // parse the result as JSON, since that's what the API provides
            do {
                guard let todo = try JSONSerialization.jsonObject(with: responseData, options: [])
                    as? [String: Any] else {
                        print("error trying to convert data to JSON")
                        return
                }
                // now we have the todo
                // let's just print it to prove we can access it
                print("The todo is: " + todo.description)
                
                // the todo object is a dictionary
                // so we just access the title using the "title" key
                // so check for a title and print it if we have one
                guard let todoTitle = todo["title"] as? String else {
                    print("Could not get todo title from JSON")
                    return
                }
                print("The title is: " + todoTitle)
            } catch  {
                print("error trying to convert data to JSON")
                return
            }
        }
        task.resume()
    }
    
    func acceptHouseholdPostCall() {
        
        //"accessCode": "add510e472df4cb9afe3929747c70b74”,
        
        //"id": "i604a40b076365d43ef99b40236365547e7",
        
        //endpoint
        
        /*body
        {
            "accessCode":"87794799ec344f469fa2171fa206c534",
            "email": {
                "address": "jarvisuser-automation2@example.com"
            },
            "sendEmail":true
        }

        */
       

        let acceptEndpoint: String = "https://accounts-e2e.platform.intuit.net/v1/invitations/i609c7b38da33744168b8907602ed8cc70d/accept"
        
        //let todosEndpoint: String = "https://jsonplaceholder.typicode.com/todos"
        guard let acceptURL = URL(string: acceptEndpoint) else {
            print("Error: cannot create URL")
            return
        }
        var accessUrlRequest = URLRequest(url: acceptURL)
        accessUrlRequest.httpMethod = "POST"
        let bodyDict: [String: Any] = ["accessCode": "303f22434e10478a9d8d64f2a8572990"]
        let headerDict: [String:String] = [
            "Authorization": "Bearer eyJraWQiOiJyNHA1U2JMMnFhRmVoRnpoajhnSSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjExODA5MTY0MDgyMTM3NzUzIiwieC5hbmFtZSI6Ik9wZW4gUGxhdGZvcm0gTmF0aXZlIEFwcHMtVHVyYm8gaU9TIiwieC5jYWFsIjoyMCwiaXNzIjoiSW50dWl0LmN0by5pYW0ub2F1dGgyIiwieC51YWFsIjoyNSwicGlkIjoiUTN0MGNsYlVUOG1aQkRkZGZuNE9HU2JlNDRzK1o2ZVZIRCtCYTZvVWI1WEhzPSIsImF1ZCI6WyI2RE5ITCIsIklZd256IiwiTTlPTDIiLCJNQjRhUSIsIlN2bDFsIiwiU3hqWWMiLCJVcHNBTCIsIlZBTkRhIiwiVlpIa0oiLCJZaVMwOCIsIlpSYng1IiwiY2ZwMDEiLCJkMUtaZiIsImRwMnZSIiwiZVdsZjUiLCJsZDV3UyIsIm1pbnRjIiwibjZIZ28iLCJuU0Y3biIsInM2d2hTIiwic0xRZW8iLCJ0cmJveCIsInl0OWdoIiwiektmd00iXSwieC50a3QiOiJWMS0zLWEzODkyODNmamw5d2Z2eW8yeG1weXQiLCJhdXRoX3RpbWUiOjE1NDUzNDc0MDksInguY2lkIjoiUTNCM2ZZYjJMV3JHWWhWakxFaXdMNEdMT0o3VXhYYXJ3bkJDb29xQ0plYzVWWXV5alYiLCJ4LmNhY3QiOjEwLCJ4LmFwcCI6IjRnemU5Sk9PVk90bzE5c0ZuZnY4Mjg0RFdMc3NzVTFEVm5YSG1wT3lWdzV2TDgwREZSIiwiZXhwIjoxNTQ1MzUxMDEwLCJpYXQiOjE1NDUzNDc0MTAsInguYXR5cGUiOiJJTlRVSVRfTkFUSVZFIiwianRpIjoiUTMwMTU0NTM1MTAxMDJkUUZlQTVrb2NZVXJiQmxNcXY5bnNjamNiZXFaQktzdmVyNXAifQ.FAGsziOCgYzSUlzW3N7bLfvpbpSdrHHuBRxUr5lKnYpC0PJXGnNzScitHUqNbGXHSFO3YDVNILE_FS0eq6l9ogjGEfnOH9dN1Hi1V7ISqPzJ1akdeeNnkestxVTCEmgoQWAvXECt8bzBLU9Y3rGoD8RzlEv3bKSraCPR6pM6NT4",
            "Accept":"application/json",
            "Content-Type":"application/json"
        ]

        
        let jsonBody: Data
        do {
            jsonBody = try JSONSerialization.data(withJSONObject: bodyDict, options: [])
            accessUrlRequest.httpBody = jsonBody
            accessUrlRequest.allHTTPHeaderFields = headerDict
        } catch {
            print("Error: cannot create JSON from todo")
            return
        }
        
        let session = URLSession.shared
        
        let task = session.dataTask(with: accessUrlRequest) {
            (data, response, error) in
            guard error == nil else {
                print("error calling POST on /todos/1")
                print(error!)
                return
            }
            guard let responseData = data else {
                print("Error: did not receive data")
                return
            }
            
            // parse the result as JSON, since that's what the API provides
            do {
                guard let receivedResponse = try JSONSerialization.jsonObject(with: responseData,
                                                                          options: []) as? [String: Any] else {
                                                                            print("Could not get JSON from responseData as dictionary")
                                                                            return
                }
                print("The Response is: " + receivedResponse.description)
                
                guard let responseID = receivedResponse["sender"] as? Int else {
                    print("Could not get responseID as int from JSON")
                    return
                }
                print("The ID is: \(responseID)")
            } catch  {
                print("error parsing response from POST on /todos")
                return
            }
        }
        task.resume()
    }
    
    
    func getDelegatevalues(_ delegateId: String, _ delegateAccess:String){
        
        print("delegationId: \(delegateId)")
        print("accessCode: \(delegateAccess)")
    }
    
    func generateOTPPostCall(){
        

        //endpoint
        
        /*body
         {
         "access": {
         "actions": ["household.data.sharing"],
         "resources": [{"name":"personalInfo"}]
         },
         "receiver": "bb4@example.com",
         "expirationSeconds": 86400
         }
         
         */
        
        
        let acceptEndpoint: String = "https://accounts-e2e.platform.intuit.net/v1/users/me/authorization/delegation/temporary"
        
        guard let acceptURL = URL(string: acceptEndpoint) else {
            print("Error: cannot create URL")
            return
        }
        var accessUrlRequest = URLRequest(url: acceptURL)
        accessUrlRequest.httpMethod = "POST"
        let bodyDict: [String: Any] =  [
            "access": [
                "actions": "household.data.sharing",
                "resources": ["name":"personalInfo"]
            ],
            "receiver": "bb4@example.com",
            "expirationSeconds" : 86400
        ]
        let headerDict: [String:String] = [
            "Authorization": "Bearer eyJraWQiOiJyNHA1U2JMMnFhRmVoRnpoajhnSSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjExODA5MTY0MDgyMTM3NzUzIiwieC5hbmFtZSI6Ik9wZW4gUGxhdGZvcm0gTmF0aXZlIEFwcHMtVHVyYm8gaU9TIiwieC5jYWFsIjoyMCwiaXNzIjoiSW50dWl0LmN0by5pYW0ub2F1dGgyIiwieC51YWFsIjoyNSwicGlkIjoiUTM2TWdnWTQyUm56azliTEhoNWNISWFxVGp3dXZzVFpcL2ZqR0xGR3RINUt2WT0iLCJhdWQiOlsiNkROSEwiLCJJWXdueiIsIk05T0wyIiwiTUI0YVEiLCJTdmwxbCIsIlN4alljIiwiVXBzQUwiLCJWQU5EYSIsIlZaSGtKIiwiWWlTMDgiLCJaUmJ4NSIsImNmcDAxIiwiZDFLWmYiLCJkcDJ2UiIsImVXbGY1IiwibGQ1d1MiLCJtaW50YyIsIm42SGdvIiwiblNGN24iLCJzNndoUyIsInNMUWVvIiwidHJib3giLCJ5dDlnaCIsInpLZndNIl0sIngudGt0IjoiVjEtMjMwLWEzYjIxeXdteXl5c3h0aXU2eW8xaTUiLCJhdXRoX3RpbWUiOjE1NDUzNDUzMDQsInguY2lkIjoiUTNCM2ZZYjJMV3JHWWhWakxFaXdMNEdMT0o3VXhYYXJ3bkJDb29xQ0plYzVWWXV5alYiLCJ4LmNhY3QiOjEwLCJ4LmFwcCI6IjRnemU5Sk9PVk90bzE5c0ZuZnY4Mjg0RFdMc3NzVTFEVm5YSG1wT3lWdzV2TDgwREZSIiwiZXhwIjoxNTQ1MzQ4OTA1LCJpYXQiOjE1NDUzNDUzMDUsInguYXR5cGUiOiJJTlRVSVRfTkFUSVZFIiwianRpIjoiUTMwMTU0NTM0ODkwNU5hYnB3NEVGUHhvclNOQXJZbWJyTjh0R0czSzFGQkpLeXdCWDMifQ.e1BD4ujecYcJ_s-SpWgHSnh6OS_qJ0RetZvw1VF5bj8u2z6MF7-V4gPPmHZruEr5_-9Hnuxn_u-6JweS9Xkfk6A1FMiqvvAOP1nIBiM0TNXutJRs8cEU6AnFBPlBDvhA66TOP35ssKUfHZu_CYCD1hBB6qhKvW0xIEG5xt4vyjs",
            "Accept":"application/json",
            "Content-Type":"application/json",
            "intuit_originatingip":"172.21.46.51"
        ]
        
        
        let jsonBody: Data
        do {
            jsonBody = try JSONSerialization.data(withJSONObject: bodyDict, options: [])
            accessUrlRequest.httpBody = jsonBody
            accessUrlRequest.allHTTPHeaderFields = headerDict
        } catch {
            print("Error: cannot create JSON from todo")
            return
        }
        
        let session = URLSession.shared
        
        let task = session.dataTask(with: accessUrlRequest) {
            (data, response, error) in
            guard error == nil else {
                print("error calling POST on generateOTP endpoint")
                print(error!)
                return
            }
            guard let responseData = data else {
                print("Error: did not receive data")
                return
            }
            
            // parse the result as JSON, since that's what the API provides
            do {
                guard let receivedResponse = try JSONSerialization.jsonObject(with: responseData,
                                                                              options: []) as? [String: Any] else {
                                                                                print("Could not get JSON from responseData as dictionary")
                                                                                return
                }
                print("The Response is: " + receivedResponse.description)
                let delegationId = receivedResponse["delegationId"] as! String
                let accessCode = receivedResponse["accessCode"] as! String
                print("delegationId: \(String(describing:delegationId))")
                print("accessCode: \(String(describing: accessCode))")

                self.getDelegatevalues(delegationId,accessCode)
                
               /* guard let delegationId = receivedResponse["delegationId"] as? Int else {
                    print("Could not get responseID as int from JSON")
                    return
                }

                print("The ID is: \(delegationId)")
  */
            } catch  {
                print("error parsing response from POST on /todos")
                return
            }
        }
        task.resume()
    }
    
    
    
    func conscentPostCall() {
        
       
        
        //endpoint:https://accounts-e2e.platform.intuit.net/v1/users/consent
        
        /*body
         {
         "consent":
         [
         {
         "consentType":"household-share-data",
         "consented":"true",
         "purposes":["household.data.sharing"],
         "attributes":
         [
         {"name":"delegationId","value":"879bb18e9b544f089556efcc7671cf32"},
         {"name":"delegationAccessCode","value":"879bb18e9b544f089556efcc7671cf32"},
         {"name":"inviterEmail","value":"bb3@example.com"},
         {"name":"inviterName","value":"dontchange"},
         {"name":"inviterGivenName","value":"dont"},
         {"name":"dataShareRequest","value":"creditScore"},
         {"name":"dataShareRequest","value":"personalInfo"},
         {"name":"senderUserId","value":"4611809164082137753"}
         ]
         }
         ]
         }
         */
        
        
        let acceptEndpoint: String = "https://accounts-e2e.platform.intuit.net/v1/users/consent"
        
        //let todosEndpoint: String = "https://jsonplaceholder.typicode.com/todos"
        guard let acceptURL = URL(string: acceptEndpoint) else {
            print("Error: cannot create URL")
            return
        }
        var accessUrlRequest = URLRequest(url: acceptURL)
        accessUrlRequest.httpMethod = "POST"
        let bodyDict: [String: Any] =  [
            "consent":
            [
            [
            "consentType":"household-share-data",
            "consented":"true",
            "purposes":["household.data.sharing"],
            "attributes":
            [
            ["name":"delegationId","value":"9ef7cf83117b4d698adb79103e123f0e"],
            ["name":"delegationAccessCode","value":"9ef7cf83117b4d698adb79103e123f0e"],
            ["name":"inviterEmail","value":"bb3@example.com"],
            ["name":"inviterName","value":"dontchange"],
            ["name":"inviterGivenName","value":"dont"],
            ["name":"dataShareRequest","value":"creditScore"],
            ["name":"dataShareRequest","value":"personalInfo"],
            ["name":"senderUserId","value":"4611809164082137753"]
            ]
            ]
            ]
        ]
        let headerDict: [String:String] = [
            "Authorization": "Bearer eyJraWQiOiJyNHA1U2JMMnFhRmVoRnpoajhnSSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjExODA5MTY0MDgyMTM3NzUzIiwieC5hbmFtZSI6Ik9wZW4gUGxhdGZvcm0gTmF0aXZlIEFwcHMtVHVyYm8gaU9TIiwieC5jYWFsIjoyMCwiaXNzIjoiSW50dWl0LmN0by5pYW0ub2F1dGgyIiwieC51YWFsIjoyNSwicGlkIjoiUTM2TWdnWTQyUm56azliTEhoNWNISWFxVGp3dXZzVFpcL2ZqR0xGR3RINUt2WT0iLCJhdWQiOlsiNkROSEwiLCJJWXdueiIsIk05T0wyIiwiTUI0YVEiLCJTdmwxbCIsIlN4alljIiwiVXBzQUwiLCJWQU5EYSIsIlZaSGtKIiwiWWlTMDgiLCJaUmJ4NSIsImNmcDAxIiwiZDFLWmYiLCJkcDJ2UiIsImVXbGY1IiwibGQ1d1MiLCJtaW50YyIsIm42SGdvIiwiblNGN24iLCJzNndoUyIsInNMUWVvIiwidHJib3giLCJ5dDlnaCIsInpLZndNIl0sIngudGt0IjoiVjEtMjMwLWEzYjIxeXdteXl5c3h0aXU2eW8xaTUiLCJhdXRoX3RpbWUiOjE1NDUzNDUzMDQsInguY2lkIjoiUTNCM2ZZYjJMV3JHWWhWakxFaXdMNEdMT0o3VXhYYXJ3bkJDb29xQ0plYzVWWXV5alYiLCJ4LmNhY3QiOjEwLCJ4LmFwcCI6IjRnemU5Sk9PVk90bzE5c0ZuZnY4Mjg0RFdMc3NzVTFEVm5YSG1wT3lWdzV2TDgwREZSIiwiZXhwIjoxNTQ1MzQ4OTA1LCJpYXQiOjE1NDUzNDUzMDUsInguYXR5cGUiOiJJTlRVSVRfTkFUSVZFIiwianRpIjoiUTMwMTU0NTM0ODkwNU5hYnB3NEVGUHhvclNOQXJZbWJyTjh0R0czSzFGQkpLeXdCWDMifQ.e1BD4ujecYcJ_s-SpWgHSnh6OS_qJ0RetZvw1VF5bj8u2z6MF7-V4gPPmHZruEr5_-9Hnuxn_u-6JweS9Xkfk6A1FMiqvvAOP1nIBiM0TNXutJRs8cEU6AnFBPlBDvhA66TOP35ssKUfHZu_CYCD1hBB6qhKvW0xIEG5xt4vyjs",
            "Accept":"application/json",
            "Content-Type":"application/json",
            "intuit_originatingip":"172.21.46.51"
        ]
        
        
        let jsonBody: Data
        do {
            jsonBody = try JSONSerialization.data(withJSONObject: bodyDict, options: [])
            accessUrlRequest.httpBody = jsonBody
            accessUrlRequest.allHTTPHeaderFields = headerDict
        } catch {
            print("Error: cannot create JSON from todo")
            return
        }
        
        let session = URLSession.shared
        
        let task = session.dataTask(with: accessUrlRequest) {
            (data, response, error) in
            guard error == nil else {
                print("error calling POST on /todos/1")
                print(error!)
                return
            }
            guard let responseData = data else {
                print("Error: did not receive data")
                return
            }
            
            // parse the result as JSON, since that's what the API provides
            do {
                guard let receivedResponse = try JSONSerialization.jsonObject(with: responseData,
                                                                              options: []) as? [String: Any] else {
                                                                                print("Could not get JSON from responseData as dictionary")
                                                                                return
                }
                print("The Response is: " + receivedResponse.description)
                
                guard let responseID = receivedResponse["sender"] as? Int else {
                    print("Could not get responseID as int from JSON")
                    return
                }
                print("The ID is: \(responseID)")
            } catch  {
                print("error parsing response from POST on /todos")
                return
            }
        }
        
        task.resume()
    }
    
    
    
    
    
    func makeDeleteCall() {
        let firstTodoEndpoint: String = "https://jsonplaceholder.typicode.com/todos/1"
        var firstTodoUrlRequest = URLRequest(url: URL(string: firstTodoEndpoint)!)
        firstTodoUrlRequest.httpMethod = "DELETE"
        
        let session = URLSession.shared
        
        let task = session.dataTask(with: firstTodoUrlRequest) {
            (data, response, error) in
            guard let _ = data else {
                print("error calling DELETE on /todos/1")
                return
            }
            print("DELETE ok")
        }
        task.resume()
    }
}

