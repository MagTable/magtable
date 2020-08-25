import React from "react";
import { Client } from "@stomp/stompjs";
import { MTR_PUBLISH } from "../../actions/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateTable } from "../../actions/magtable";

const StompClient = ({ setWSConnected }) => {
	const authenticated = useSelector(state => state.auth.isAuthenticated);

	const dispatch = useDispatch();
	let client = new Client({
		brokerURL:
			process.env.REACT_APP_PUBLIC_WS_URL || "ws://localhost:8080/ws/websocket",
		reconnectDelay: 3000,
		heartbeatIncoming: 10000,
		heartbeatOutgoing: 10000
	});

	client.onWebSocketClose = () => {
		setWSConnected(false);
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

	if (authenticated) {
		client.activate();
	} else if (client) {
		setWSConnected(false);
	}

	return <></>;
};

export default StompClient;
