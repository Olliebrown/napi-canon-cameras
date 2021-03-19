import * as CameraApiStubs from "../src/stubs/index";
import CommonApertureTests from "./common/Aperture.test";
import CommonApiErrorTests from "./common/ApiError.test";
import CommonExposureCompensationTests from "./common/ExposureCompensation.test";
import CommonFlagTests from "./common/Flag.test";
import CommonISOSensitivityTests from "./common/ISOSensitivity.test";
import CommonObjectEventTests from "./common/ObjectEvent.test";
import CommonOptionTests from "./common/Option.test";
import CommonShutterSpeedTests from "./common/ShutterSpeed.test";
import CommonStateEventTests from "./common/StateEvent.test";

describe(
    'Stubs Tests',
    () => {
        const stubs = CameraApiStubs as any;
        CommonApertureTests(stubs);
        CommonApiErrorTests(stubs);
        CommonExposureCompensationTests(stubs);
        CommonFlagTests(stubs);
        CommonISOSensitivityTests(stubs);
        CommonObjectEventTests(stubs);
        CommonOptionTests(stubs);
        CommonShutterSpeedTests(stubs);
        CommonStateEventTests(stubs);
    }
);
