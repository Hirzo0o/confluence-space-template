package ut.com.progressoft.plugins.tutorial.confluence.spacebp;

import org.junit.Test;
import com.progressoft.plugins.tutorial.confluence.spacebp.api.MyPluginComponent;
import com.progressoft.plugins.tutorial.confluence.spacebp.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}