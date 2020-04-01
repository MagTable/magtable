import React from "react";
import { Client } from "@stomp/stompjs";
import { MTR_PUBLISH } from "../../actions/constants";
import { useDispatch } from "react-redux";
import { updateTable } from "../../actions/magtable";

const StompClient = ({ setWSConnected }) => {
	const dispatch = useDispatch();
	const client = new Client({
		brokerURL: "ws://localhost:8080/ws/websocket",
// 		brokerURL: "wss://sait-capstone2020.herokuapp.com/ws/websocket",
		reconnectDelay: 3000,
		heartbeatIncoming: 5000,
		heartbeatOutgoing: 5000
	});

	client.onWebSocketClose = () => {
		setWSConnected(false);
	};

	client.onStompError = function(frame) {
		// Will be invoked in case of error encountered at Broker
		// Bad login/passcode typically will cause an error
		// Complaint brokers will set `message` header with a brief message. Body may contain details.
		// Compliant brokers will terminate the connection after any error
		console.log("Broker reported error: " + frame.headers["message"]);
		console.log("Additional details: " + frame.body);
	};

	
	client.onConnect = () => {
		client.subscribe("/topic/mtr", onMessage);
		setWSConnected(true);
	};

	const onMessage = e => {
		const { type, payload } = JSON.parse(e.body);

		switch (type) {
			case MTR_PUBLISH:
				dispatch(updateTable(payload));
				break;
			default:
				console.log("Unknown WS Case");
		}
	};

	client.activate();

	return <></>;
};

export default StompClient;
