import React from "react";
import {
    AssignmentContainer,
    MapsDiv
} from "../../styled/magtable/Maps";
import {ListTitle, ListTitleText} from "../../styled/magtable/Titling";
import {EmployeeList, EmployeeListItem} from "../../styled/magtable/ListContent";
import TowerMap from "../_dumbcomponents/TowerMap";
import TruckMap from "../_dumbcomponents/TruckMap";
import TruckList from "../_dumbcomponents/TruckList";
import dummyTrucks from "../_dumbcomponents/dummyTrucks.js";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {


    return (
        <AssignmentContainer>
            <EmployeeList>
                <ListTitle>
                    <ListTitleText>
                        Employees
                    </ListTitleText>
                </ListTitle>

                <EmployeeListItem/>
                <EmployeeListItem/>
            </EmployeeList>
            <TruckList trucks={dummyTrucks}/>

            <MapsDiv>
                <TruckMap/>
                <TowerMap roles={['Tower Spotter', 'CTM', 'Iceman', 'Ice House']}/>
            </MapsDiv>

        </AssignmentContainer>
    );
};

export default AssignmentTable;
