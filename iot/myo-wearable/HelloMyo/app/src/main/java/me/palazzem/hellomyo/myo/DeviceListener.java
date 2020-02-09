package me.palazzem.hellomyo.myo;

import android.util.Log;

import com.thalmic.myo.AbstractDeviceListener;
import com.thalmic.myo.Arm;
import com.thalmic.myo.Myo;
import com.thalmic.myo.Pose;
import com.thalmic.myo.XDirection;

import me.palazzem.hellomyo.Constants;
import me.palazzem.hellomyo.R;

public class DeviceListener extends AbstractDeviceListener {
    private GestureRecognition mCallback;

    public DeviceListener(GestureRecognition callback) {
        mCallback = callback;
    }

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
                mCallback.onPoseRecognition(R.drawable.double_tap);
                break;
            case REST:
                mCallback.onPoseRecognition(R.drawable.double_tap);
                break;
            case FIST:
                mCallback.onPoseRecognition(R.drawable.fist);
                break;
            case FINGERS_SPREAD:
                mCallback.onPoseRecognition(R.drawable.fingers_spread);
                break;
            case WAVE_IN:
                mCallback.onPoseRecognition(R.drawable.wave_in);
                break;
            case WAVE_OUT:
                mCallback.onPoseRecognition(R.drawable.wave_out);
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
