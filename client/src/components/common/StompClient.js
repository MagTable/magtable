import React from "react";
import { Client } from "@stomp/stompjs";
import { MTR_PUBLISH } from "../../actions/constants";
import { useDispatch } from "react-redux";
import { updateTable } from "../../actions/magtable";

const StompClient = ({ setWSConnected }) => {
	const dispatch = useDispatch();
	const client = new Client({
		brokerURL: "ws://localhost:8080/ws/websocket",
		reconnectDelay: 3000,
		heartbeatIncoming: 30000,
		heartbeatOutgoing: 30000
	});

	client.onWebSocketClose = () => {
		setWSConnected(false);
	};

	client.onConnect = () => {
		client.subscribe("/topic/mtr", onMessage);
		setWSConnected(true);
	};

	client.onWebSocketError = () => {
		client.brokerURL =
			"ws://https://sait-capstone2020.herokuapp.com/ws/websocket";
		client.activate();
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