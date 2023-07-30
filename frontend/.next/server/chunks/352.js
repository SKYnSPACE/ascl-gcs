"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ handleMessage),
/* harmony export */   "u": () => (/* binding */ initTelemetry)
/* harmony export */ });
function initTelemetry() {
    console.log("InitTelemetry() called");
    let RcvdData = new Object();
    RcvdData.HEARTBEAT = {
        custom_mode: 0,
        type: 0,
        autopilot: 0,
        base_mode: 0,
        system_status: 0,
        mavlink_version: 0
    };
    RcvdData.GPS_RAW_INT = {
        time_usec: 0,
        fix_type: 0,
        lat: 0,
        lon: 0,
        alt: 0,
        eph: 0,
        epv: 0,
        vel: 0,
        cog: 0,
        satellites_visible: 0,
        alt_ellpisoid: 0,
        h_acc: 0,
        v_acc: 0,
        vel_acc: 0,
        hdg_acc: 0,
        yaw: 0
    };
    RcvdData.SCALED_IMU = {
        time_boot_ms: 0,
        xacc: 0,
        yacc: 0,
        zacc: 0,
        xgyro: 0,
        ygyro: 0,
        zgyro: 0,
        xmag: 0,
        ymag: 0,
        zmag: 0,
        temperature: 0
    };
    RcvdData.ATTITUDE = {
        time_boot_ms: 0,
        roll: 0,
        pitch: 0,
        yaw: 0,
        rollspeed: 0,
        pitchspeed: 0,
        yawspeed: 0
    };
    RcvdData.ATTITUDE_QUATERNION = {
        time_boot_ms: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        rollspeed: 0,
        pitchspeed: 0,
        yawspeed: 0,
        repr_offset_q: [
            0,
            0,
            0,
            0
        ]
    };
    RcvdData.LOCAL_POSITION_NED = {
        time_boot_ms: 0,
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0
    };
    RcvdData.GLOBAL_POSITION_INT = {
        time_boot_ms: 0,
        lat: 0,
        lon: 0,
        alt: 0,
        relative_alt: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        hdg: 0
    };
    RcvdData.HIL_STATE = {
        time_usec: 0,
        roll: 0,
        pitch: 0,
        yaw: 0,
        rollspeed: 0,
        pitchspeed: 0,
        yawspeed: 0,
        lat: 0,
        lon: 0,
        alt: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        xacc: 0,
        yacc: 0,
        zacc: 0
    };
    RcvdData.DISTANCE_SENSOR = {
        time_boot_ms: 0,
        min_distance: 0,
        max_distance: 0,
        current_distance: 0,
        type: 0,
        id: 0,
        orientation: 0,
        covariance: 0,
        horizontal_fov: 0,
        vertical_fov: 0,
        quaternion: [
            0,
            0,
            0,
            0
        ],
        signal_quality: 0
    };
    RcvdData.MISSION_ITEM_INT = {
        target_system: 0,
        target_component: 0,
        seq: 0,
        frame: 0,
        command: 0,
        current: 0,
        autocontinue: 0,
        param1: 0,
        param2: 0,
        param3: 0,
        param4: 0,
        x: 0,
        y: 0,
        z: 0,
        mission_type: 0
    };
    RcvdData.CAMERA_TRACKING_IMAGE_STATUS = {
        tracking_status: 0,
        tracking_mode: 0,
        target_data: 0,
        point_x: 0.0,
        poit_y: 0.0,
        radius: 0.0,
        rec_top_x: 0.0,
        rec_top_y: 0.0,
        rec_bottom_x: 0.0,
        rec_bottom_y: 0.0
    };
    RcvdData.CAMERA_CAPTURE_STATUS = {
        time_boot_ms: 0,
        image_status: 0,
        video_status: 0,
        image_interval: 0,
        recording_time_ms: 0,
        available_capacity: 0,
        image_count: 0
    };
    return RcvdData;
}
function handleMessage(data, TelemetryData) {
    // transforming .JSON to array
    // data = JSON.parse(data);
    switch(data.mavpackettype){
        case "HEARTBEAT":
            TelemetryData.HEARTBEAT.custom_mode = data.custom_mode;
            TelemetryData.HEARTBEAT.type = data.type;
            TelemetryData.HEARTBEAT.autopilot = data.autopilot;
            TelemetryData.HEARTBEAT.base_mode = data.base_mode;
            TelemetryData.HEARTBEAT.system_status = data.system_status;
            TelemetryData.HEARTBEAT.mavlink_version = data.mavlink_version;
            console.log("heartbeat");
            break;
        case "GPS_RAW_INT":
            TelemetryData.GPS_RAW_INT.time_usec = data.time_usec;
            TelemetryData.GPS_RAW_INT.fix_type = data.fix_type;
            TelemetryData.GPS_RAW_INT.lat = data.lat * 1E-7;
            TelemetryData.GPS_RAW_INT.lon = data.lon * 1E-7;
            TelemetryData.GPS_RAW_INT.alt = data.fix_type * 1E-3;
            TelemetryData.GPS_RAW_INT.eph = data.eph;
            TelemetryData.GPS_RAW_INT.epv = data.epv;
            TelemetryData.GPS_RAW_INT.vel = data.vel * 1E-2;
            TelemetryData.GPS_RAW_INT.cog = data.cog * 1E-2;
            TelemetryData.GPS_RAW_INT.satellites_visible = data.satellites_visible;
            TelemetryData.GPS_RAW_INT.alt_ellpisoid = data.alt_ellpisoid;
            TelemetryData.GPS_RAW_INT.h_acc = data.h_acc * 1E-3;
            TelemetryData.GPS_RAW_INT.v_acc = data.v_acc * 1E-3;
            TelemetryData.GPS_RAW_INT.vel_acc = data.vel_acc * 1E-3;
            TelemetryData.GPS_RAW_INT.hdg_acc = data.hdg_acc * 1E-3;
            TelemetryData.GPS_RAW_INT.yaw = data.yaw * 1E-2;
            break;
        case "SCALED_IMU":
            TelemetryData.SCALED_IMU.time_boot_ms = data.time_boot_ms;
            TelemetryData.SCALED_IMU.xacc = data.xacc;
            TelemetryData.SCALED_IMU.yacc = data.yacc;
            TelemetryData.SCALED_IMU.zacc = data.zacc;
            TelemetryData.SCALED_IMU.xgyro = data.xgyro;
            TelemetryData.SCALED_IMU.ygyro = data.ygyro;
            TelemetryData.SCALED_IMU.zgyro = data.zgyro;
            TelemetryData.SCALED_IMU.xmag = data.xmag;
            TelemetryData.SCALED_IMU.ymag = data.ymag;
            TelemetryData.SCALED_IMU.zmag = data.zmag;
            TelemetryData.SCALED_IMU.temperature = data.temperature;
            break;
        case "ATTITUDE":
            TelemetryData.ATTITUDE.time_boot_ms = data.time_boot_ms;
            TelemetryData.ATTITUDE.roll = data.roll;
            TelemetryData.ATTITUDE.pitch = data.pitch;
            TelemetryData.ATTITUDE.yaw = data.yaw;
            TelemetryData.ATTITUDE.rollspeed = data.rollspeed;
            TelemetryData.ATTITUDE.pitchspeed = data.pitchspeed;
            TelemetryData.ATTITUDE.yawspeed = data.yawspeed;
            break;
        case "ATTITUDE_QUATERNION":
            TelemetryData.ATTITUDE_QUATERNION.time_boot_ms = data.time_boot_ms;
            TelemetryData.ATTITUDE_QUATERNION.q1 = data.q1;
            TelemetryData.ATTITUDE_QUATERNION.q2 = data.q2;
            TelemetryData.ATTITUDE_QUATERNION.q3 = data.q3;
            TelemetryData.ATTITUDE_QUATERNION.q4 = data.q4;
            TelemetryData.ATTITUDE_QUATERNION.rollspeed = data.rollspeed;
            TelemetryData.ATTITUDE_QUATERNION.pitchspeed = data.pitchspeed;
            TelemetryData.ATTITUDE_QUATERNION.yawspeed = data.yawspeed;
            TelemetryData.ATTITUDE_QUATERNION.repr_offset_q = data.repr_offset_q;
            break;
        case "LOCAL_POSITION_NED":
            TelemetryData.LOCAL_POSITION_NED.time_boot_ms = data.time_boot_ms;
            TelemetryData.LOCAL_POSITION_NED.x = data.x;
            TelemetryData.LOCAL_POSITION_NED.y = data.y;
            TelemetryData.LOCAL_POSITION_NED.z = data.z;
            TelemetryData.LOCAL_POSITION_NED.vx = data.vx;
            TelemetryData.LOCAL_POSITION_NED.vy = data.vy;
            TelemetryData.LOCAL_POSITION_NED.vz = data.vz;
            break;
        case "GLOBAL_POSITION_INT":
            TelemetryData.GLOBAL_POSITION_INT.time_boot_ms = data.time_boot_ms;
            TelemetryData.GLOBAL_POSITION_INT.lat = data.lat * 1E-7;
            TelemetryData.GLOBAL_POSITION_INT.lon = data.lon * 1E-7;
            TelemetryData.GLOBAL_POSITION_INT.alt = data.alt * 1E-3;
            TelemetryData.GLOBAL_POSITION_INT.relative_alt = data.relative_alt * 1E-3;
            TelemetryData.GLOBAL_POSITION_INT.vx = data.vx * 1E-2;
            TelemetryData.GLOBAL_POSITION_INT.vy = data.vy * 1E-2;
            TelemetryData.GLOBAL_POSITION_INT.vz = data.vz * 1E-2;
            TelemetryData.GLOBAL_POSITION_INT.vz = data.vz * 1E-2;
            break;
        case "HIL_STATE":
            TelemetryData.HIL_STATE.time_usec = data.time_usec;
            TelemetryData.HIL_STATE.roll = data.roll;
            TelemetryData.HIL_STATE.pitch = data.pitch;
            TelemetryData.HIL_STATE.yaw = data.yaw;
            TelemetryData.HIL_STATE.rollspeed = data.rollspeed;
            TelemetryData.HIL_STATE.pitchspeed = data.pitchspeed;
            TelemetryData.HIL_STATE.yawspeed = data.yawspeed;
            TelemetryData.HIL_STATE.lat = data.lat * 1E-7;
            TelemetryData.HIL_STATE.lon = data.lon * 1E-7;
            TelemetryData.HIL_STATE.alt = data.alt * 1E-3;
            TelemetryData.HIL_STATE.vx = data.vx * 1E-3;
            TelemetryData.HIL_STATE.vy = data.vy * 1E-3;
            TelemetryData.HIL_STATE.vz = data.vz * 1E-3;
            TelemetryData.HIL_STATE.xacc = data.xacc;
            TelemetryData.HIL_STATE.yacc = data.yacc;
            TelemetryData.HIL_STATE.zacc = data.zacc;
            break;
        case "DISTANCE_SENSOR":
            TelemetryData.DISTANCE_SENSOR.time_boot_ms = data.time_boot_ms;
            TelemetryData.DISTANCE_SENSOR.min_distance = data.min_distance * 1E-2;
            TelemetryData.DISTANCE_SENSOR.max_distance = data.max_distance * 1E-2;
            TelemetryData.DISTANCE_SENSOR.current_distance = data.current_distance * 1E-2;
            TelemetryData.DISTANCE_SENSOR.type = data.type;
            TelemetryData.DISTANCE_SENSOR.id = data.id;
            TelemetryData.DISTANCE_SENSOR.orientation = data.orientation;
            TelemetryData.DISTANCE_SENSOR.covariance = data.covariance;
            TelemetryData.DISTANCE_SENSOR.horizontal_fov = data.horizontal_fov;
            TelemetryData.DISTANCE_SENSOR.vertical_fov = data.vertical_fov;
            TelemetryData.DISTANCE_SENSOR.quaternion = data.quaternion;
            TelemetryData.DISTANCE_SENSOR.signal_quality = data.signal_quality;
            break;
        case "MISSION_ITEM_INT":
            TelemetryData.MISSION_ITEM_INT.target_system = data.target_system;
            TelemetryData.MISSION_ITEM_INT.target_component = data.target_component;
            TelemetryData.MISSION_ITEM_INT.seq = data.seq;
            TelemetryData.MISSION_ITEM_INT.frame = data.frame;
            TelemetryData.MISSION_ITEM_INT.command = data.command;
            TelemetryData.MISSION_ITEM_INT.current = data.current;
            TelemetryData.MISSION_ITEM_INT.autocontinue = data.autocontinue;
            TelemetryData.MISSION_ITEM_INT.param1 = data.param1;
            TelemetryData.MISSION_ITEM_INT.param2 = data.param2;
            TelemetryData.MISSION_ITEM_INT.param3 = data.param3;
            TelemetryData.MISSION_ITEM_INT.param4 = data.param4;
            TelemetryData.MISSION_ITEM_INT.x = data.x;
            TelemetryData.MISSION_ITEM_INT.y = data.y;
            TelemetryData.MISSION_ITEM_INT.z = data.z;
            TelemetryData.MISSION_ITEM_INT.mission_type = data.mission_type;
            break;
        case "CAMERA_TRACKING_IMAGE_STATUS":
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.tracking_status = data.tracking_status;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.tracking_mode = data.tracking_mode;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.target_data = data.target_data;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.point_x = data.point_x;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.point_y = data.point_y;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.radius = data.raidus;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.rec_top_x = data.rec_top_x;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.rec_top_y = data.rec_top_y;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.rec_bottom_x = data.rec_bottom_x;
            TelemetryData.CAMERA_TRACKING_IMAGE_STATUS.rec_bottom_y = data.rec_bottom_y;
            break;
        case "CAMERA_CAPTURE_STATUS":
            TelemetryData.CAMERA_CAPTURE_STATUS.time_boot_ms = data.time_boot_ms;
            TelemetryData.CAMERA_CAPTURE_STATUS.image_status = data.image_status;
            TelemetryData.CAMERA_CAPTURE_STATUS.video_status = data.video_status;
            TelemetryData.CAMERA_CAPTURE_STATUS.image_interval = data.image_interval;
            TelemetryData.CAMERA_CAPTURE_STATUS.recording_time_ms = data.recording_time_ms;
            TelemetryData.CAMERA_CAPTURE_STATUS.available_capacity = data.available_capacity;
            TelemetryData.CAMERA_CAPTURE_STATUS.image_count = data.image_count;
            break;
        default:
    }
    // console.log('HandleMessage called for', data.mavpackettype);
    return TelemetryData;
}


/***/ })

};
;