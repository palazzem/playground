package me.palazzem.hellomyo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

import com.thalmic.myo.Hub;
import com.thalmic.myo.scanner.ScanActivity;

import me.palazzem.hellomyo.myo.DeviceListener;
import me.palazzem.hellomyo.myo.GestureRecognition;

public class MainActivity extends AppCompatActivity implements GestureRecognition {
    private Hub mHub;
    private TextView mRecognizedGesture;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        boolean status;

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mRecognizedGesture = (TextView) findViewById(R.id.recognized_gesture);

        // Hub initialization (manages Myo instances)
        mHub = Hub.getInstance();
        status = mHub.init(this);

        // checks Hub initialization (fails if the system doesn't support Bluetooth Low Energy)
        if (!status) {
            Log.e(Constants.TAG_LOG, "Hub initialization failed!");
        }

        // disabling data usage send
        mHub.setSendUsageData(false);
        mHub.addListener(new DeviceListener(this));
    }

    @Override
    public void onPoseRecognition(int imageDrawable) {
        // change the ImageView source
        mRecognizedGesture.setCompoundDrawablesWithIntrinsicBounds(0, 0, 0, imageDrawable);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_pairing) {
            myoPairing();
        }

        return super.onOptionsItemSelected(item);
    }

    private void myoPairing() {
        // Use ScanActivity.class for Myo pairing
        Intent intent = new Intent(getApplicationContext(), ScanActivity.class);
        startActivity(intent);
    }
}
