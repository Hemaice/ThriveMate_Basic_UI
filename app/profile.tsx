import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, CreditCard as Edit3, Save, Camera, LogOut } from 'lucide-react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2024',
    bio: 'Passionate learner focused on personal growth and wellness. Always striving to achieve new goals and maintain a balanced lifestyle.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleBack = () => {
    router.back();
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => router.replace('/'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <ArrowLeft size={24} color="#4F46E5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={isEditing ? handleSave : () => setIsEditing(true)}
        >
          {isEditing ? (
            <Save size={24} color="#10B981" />
          ) : (
            <Edit3 size={24} color="#4F46E5" />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }}
              style={styles.profileImage}
            />
            {isEditing && (
              <TouchableOpacity style={styles.cameraButton}>
                <Camera size={20} color="#FFFFFF" />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.userTitle}>ThriveMate Member</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Goals Achieved</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Days Active</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Success Rate</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <User size={20} color="#4F46E5" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Full Name</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.name}
                  onChangeText={(text) => setUserInfo({...userInfo, name: text})}
                  placeholderTextColor="#9CA3AF"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.name}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Mail size={20} color="#4F46E5" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.email}
                  onChangeText={(text) => setUserInfo({...userInfo, email: text})}
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.email}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Phone size={20} color="#4F46E5" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.phone}
                  onChangeText={(text) => setUserInfo({...userInfo, phone: text})}
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.phone}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <MapPin size={20} color="#4F46E5" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Location</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.location}
                  onChangeText={(text) => setUserInfo({...userInfo, location: text})}
                  placeholderTextColor="#9CA3AF"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.location}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Calendar size={20} color="#4F46E5" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Member Since</Text>
              <Text style={styles.infoValue}>{userInfo.joinDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.sectionTitle}>About Me</Text>
          {isEditing ? (
            <TextInput
              style={styles.bioInput}
              value={userInfo.bio}
              onChangeText={(text) => setUserInfo({...userInfo, bio: text})}
              multiline
              numberOfLines={4}
              placeholderTextColor="#9CA3AF"
              placeholder="Tell us about yourself..."
            />
          ) : (
            <Text style={styles.bioText}>{userInfo.bio}</Text>
          )}
        </View>

        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          
          <View style={styles.achievementItem}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementEmoji}>🎯</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>Goal Crusher</Text>
              <Text style={styles.achievementDescription}>Completed 10 goals this month</Text>
            </View>
          </View>

          <View style={styles.achievementItem}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementEmoji}>📚</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>Study Streak</Text>
              <Text style={styles.achievementDescription}>7 days of consistent studying</Text>
            </View>
          </View>

          <View style={styles.achievementItem}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementEmoji}>💪</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>Wellness Warrior</Text>
              <Text style={styles.achievementDescription}>Maintained healthy habits for 30 days</Text>
            </View>
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <LogOut size={20} color="#FFFFFF" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  editButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F9FAFB',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  profileImageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#4F46E5',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4F46E5',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  userTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#4F46E5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
  },
  infoInput: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
    borderBottomWidth: 1,
    borderBottomColor: '#4F46E5',
    paddingBottom: 4,
  },
  bioContainer: {
    marginBottom: 32,
  },
  bioText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  bioInput: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#4F46E5',
    textAlignVertical: 'top',
    minHeight: 100,
  },
  achievementsContainer: {
    marginBottom: 32,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  logoutContainer: {
    marginBottom: 40,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});