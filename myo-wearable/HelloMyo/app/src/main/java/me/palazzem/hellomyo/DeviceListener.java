package me.palazzem.hellomyo;

import android.util.Log;

import com.thalmic.myo.AbstractDeviceListener;
import com.thalmic.myo.Arm;
import com.thalmic.myo.Myo;
import com.thalmic.myo.Pose;
import com.thalmic.myo.XDirection;

public class DeviceListener extends AbstractDeviceListener {
    @Override
    public void onAttach(Myo myo, long timestamp) {
        super.onAttach(myo, timestamp);
        Log.d(Constants.TAG_LOG, "A new Myo is connected!");
    }

    @Override
    public void onPose(Myo myo, long timestamp, Pose pose) {
        super.onPose(myo, timestamp, pose);

        // doesn't lock the Myo until an explicit action is done
        // such as myo.lock()
        myo.unlock(Myo.UnlockType.HOLD);

        switch (pose) {
            case DOUBLE_TAP:
                // double tap works as a locker/unlocker
                myo.lock();
                break;
            case REST:
                Log.d(Constants.TAG_LOG, "'cmon!");
                break;
            case FIST:
                Log.d(Constants.TAG_LOG, "Fist!");
                break;
            case FINGERS_SPREAD:
                Log.d(Constants.TAG_LOG, "Hand!");
                break;
            case WAVE_IN:
                Log.d(Constants.TAG_LOG, "Left!");
                break;
            case WAVE_OUT:
                Log.d(Constants.TAG_LOG, "Right!");
                break;
            case UNKNOWN:
                Log.d(Constants.TAG_LOG, "Unrecognized gesture :(");
                break;
        }
    }

    @Override
    public void onArmSync(Myo myo, long timestamp, Arm arm, XDirection xDirection) {
        super.onArmSync(myo, timestamp, arm, xDirection);
        Log.d(Constants.TAG_LOG, "Sync completed!");
    }

    @Override
    public void onLock(Myo myo, long timestamp) {
        super.onLock(myo, timestamp);
        Log.d(Constants.TAG_LOG, "Locked!");
    }

    @Override
    public void onUnlock(Myo myo, long timestamp) {
        super.onUnlock(myo, timestamp);
        Log.d(Constants.TAG_LOG, "Unlocked!");
    }
}
