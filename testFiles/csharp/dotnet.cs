#region Assembly System.Windows.Presentation, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
// C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.0\System.Windows.Presentation.dll
#endregion

namespace System.Windows.Threading
{
    public static class DispatcherExtensions
    {
        public static DispatcherOperation BeginInvoke(this Dispatcher dispatcher, Action action);
        public static DispatcherOperation BeginInvoke(this Dispatcher dispatcher, Action action, DispatcherPriority priority);
        public static void Invoke(this Dispatcher dispatcher, Action action);
        public static void Invoke(this Dispatcher dispatcher, Action action, TimeSpan timeout);
        public static void Invoke(this Dispatcher dispatcher, Action action, DispatcherPriority priority);
        public static void Invoke(this Dispatcher dispatcher, Action action, TimeSpan timeout, DispatcherPriority priority);
    }
}
