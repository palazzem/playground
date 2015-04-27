package me.palazzem.hellomyo;

import android.util.Log;

import com.thalmic.myo.AbstractDeviceListener;
import com.thalmic.myo.Myo;
import com.thalmic.myo.Pose;

public class DeviceListener extends AbstractDeviceListener {
    @Override
    public void onAttach(Myo myo, long timestamp) {
        super.onAttach(myo, timestamp);
        Log.d(Constants.TAG_LOG, "A new Myo is connected!");
    }

    @Override
    public void onPose(Myo myo, long timestamp, Pose pose) {
        super.onPose(myo, timestamp, pose);
        switch (pose) {
            case WAVE_IN:
                Log.d(Constants.TAG_LOG, "Left!");
                break;
            case WAVE_OUT:
                Log.d(Constants.TAG_LOG, "Right!");
                break;
        }

        // doesn't lock the Myo until an explicit action is done
        // such as myo.lock()
        myo.unlock(Myo.UnlockType.HOLD);
    }

    @Override
    public void onLock(Myo myo, long timestamp) {
        super.onLock(myo, timestamp);
        Log.d(Constants.TAG_LOG, "Locked again!");
    }

    @Override
    public void onUnlock(Myo myo, long timestamp) {
        super.onUnlock(myo, timestamp);
        Log.d(Constants.TAG_LOG, "Unlocked!");
    }
}
